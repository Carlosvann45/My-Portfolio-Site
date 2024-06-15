import React, { useState, useMemo, useEffect } from "react";
import { HiOutlineXMark } from "react-icons/hi2";
import { IconContext } from "react-icons";
import classes from "./Model.module.css";

/**
 * @name Model
 * @description login page
 * @returns Login Page
 */
const Model = ({ title, inputArr, callback, view, setView, mode }) => {
  const [inputObj, setInputObj] = useState({});
  const iconStyle = useMemo(() => ({ className: classes.reactIcon }), []);

  /**
   * Handles input change for form
   *
   * @param {Event} event
   */
  const onInputChange = (event) => {
    const input = event.target;

    setInputObj({
      ...inputObj,
      [input.id]: input.value,
    });
  };

  const isArray = (inputName) =>
    inputName === "descriptions" || inputName === "images";

  const loadValue = (inputName) => {
    let options = {};

    if (isArray(inputName)) {
      if (inputObj[inputName]?.length) {
        options = {
          value: inputObj[inputName]?.join("\n"),
        };
      } else {
        options = {
          value: inputObj[inputName],
        };
      }
    } else {
      options = {
        value: inputObj[inputName],
      };
    }

    return options;
  };

  const closeModel = () => {
    setInputObj({});
    setView(false);
  };

  useEffect(() => {
    setInputObj({});

    const newObj = {};

    inputArr.forEach((input) => {
      newObj[input.name] = input.value;
    });

    setInputObj(newObj);
  }, [inputArr]);

  return (
    <div className={view ? classes.modelPageContainer : classes.hideModel}>
      <div className={classes.model}>
        <div className={classes.closeContainer}>
          <IconContext.Provider value={iconStyle}>
            <button
              className={classes.iconBtn}
              type="button"
              onClick={closeModel}
            >
              <HiOutlineXMark />
            </button>
          </IconContext.Provider>
        </div>
        <div className={classes.modelTitleContainer}>
          <h1 className={classes.modelTitle}>{title}</h1>
        </div>
        <form
          className={classes.modelFormContainer}
          onSubmit={(event) => callback(event, inputObj)}
        >
          {!!inputArr.length &&
            inputArr.map((input, index) => (
              <label
                key={index}
                className={classes.inputContainer}
                htmlFor={input.name}
              >
                <div>
                  <span className={classes.inputTitle}>{input.title}</span>
                  {isArray(input.name) ? (
                    <textarea
                      id={input.name}
                      name={input.name}
                      className={classes.input}
                      onChange={onInputChange}
                      disabled={mode === "view"}
                      {...loadValue(input.name)}
                    />
                  ) : (
                    <input
                      id={input.name}
                      name={input.name}
                      className={classes.input}
                      onChange={onInputChange}
                      disabled={mode === "view"}
                      {...loadValue(input.name)}
                    />
                  )}
                </div>
              </label>
            ))}
          <div
            className={mode === "view" ? classes.hideBtn : classes.btnContainer}
          >
            <button className={classes.submitBtn} type="submit">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Model;
