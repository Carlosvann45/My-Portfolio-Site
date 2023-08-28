import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Cookies from 'universal-cookie';
import Common from '../../utils/Common';
import classes from './Login.module.css';
import HttpHelper from '../../utils/HttpHelper';
import Constants from '../../utils/Constants';

const Login = () => {
  const [loginCreds, setLoginCreds] = useState({});
  const navigate = useNavigate();
  const cookies = new Cookies();

  const onFormSubmit = async (event) => {
    event.preventDefault();

    HttpHelper(Constants.LOGIN_ROUTE, 'POST', loginCreds)
      .then((res) => res.json())
      .then((res) => {
        if (res.token && res.refreshToken) {
          cookies.set('token', res.token);
          cookies.set('refresh_token', res.refreshToken);

          Common.showToast('Login success', 'success');

          navigate('/admin');
        } else {
          Common.showToast('Invalid login credentials', 'error');
        }
      }).catch((err) => {
        Common.showToast(err.message, 'error');
      });
  };

  const onInputChange = (event) => {
    const input = event.target;

    setLoginCreds({
      ...loginCreds,
      [input.id]: input.value
    });
  };

  useEffect(() => {

  }, []);

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
          <button
            className={classes.submitBtn}
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
