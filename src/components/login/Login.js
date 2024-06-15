import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "universal-cookie";
import Common from "../../utils/Common";
import classes from "./Login.module.css";

/**
 * @name Login
 * @description login page
 * @returns Login Page
 */
const Login = () => {
  const [loginCreds, setLoginCreds] = useState({});
  const navigate = useNavigate();

  /**
   * Handles form submit for login credentials
   *
   * @param {Event} event
   */
  const onFormSubmit = async (event) => {
    event.preventDefault();

    const isLoggedIn = await Common.login(loginCreds);

    if (isLoggedIn) {
      navigate("/admin");

      Common.showToast("Login Success.", "success");
    } else {
      Common.showToast("Invalid login credentials.", "error");
    }
  };

  /**
   * Handles input change for form
   *
   * @param {Event} event
   */
  const onInputChange = (event) => {
    const input = event.target;

    setLoginCreds({
      ...loginCreds,
      [input.id]: input.value,
    });
  };

  /**
   * Handles token validation for redirect to admin page
   */
  useEffect(() => {
    /**
     * Handles checking if user is authorized
     */
    const checkIfAuthorized = async () => {
      const cookies = new Cookies(null, { path: "/" });
      const token = cookies.get("token");
      const refreshToken = cookies.get("refresh_token");

      if (token && refreshToken) {
        const isVerified = await Common.verifyTokens();

        if (isVerified) {
          navigate("/admin");
        }
      }
    };

    checkIfAuthorized();
  }, [navigate]);

  return (
    <div className={classes.loginPageContainer}>
      <div className={classes.loginTitleContainer}>
        <h1 className={classes.loginTitle}>Admin Console</h1>
      </div>
      <form className={classes.loginFormContainer} onSubmit={onFormSubmit}>
        <label className={classes.inputContainer} htmlFor="usernameInput">
          <div>
            <span className={classes.inputTitle}>Username</span>
            <input
              id="username"
              className={classes.input}
              onChange={onInputChange}
              maxLength="68"
              type="text"
              name="usernameInput"
            />
          </div>
        </label>
        <label className={classes.inputContainer} htmlFor="passwordInput">
          <div>
            <span className={classes.inputTitle}>Password</span>
            <input
              id="password"
              className={classes.input}
              onChange={onInputChange}
              type="password"
              name="passwordInput"
            />
          </div>
        </label>
        <div className={classes.btnContainer}>
          <button className={classes.submitBtn} type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
