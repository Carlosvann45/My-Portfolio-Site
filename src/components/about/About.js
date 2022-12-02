/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import classes from './About.module.css';
import Constants from '../../utils/Constants';
import CPluslogo from '../images/c-plus-plus.png';
import CSharpLogo from '../images/c-sharp.png';
import HtmlLogo from '../images/html5.png';
import CssLogo from '../images/css3.png';
import JavaScriptLogo from '../images/javascript.png';
import JavaLogo from '../images/java.png';
import KotlinLogo from '../images/kotlin.png';
import PythonLogo from '../images/python.png';
import AndroidLogo from '../images/android.png';
import DotNetLogo from '../images/dot-net.png';
import PostgresqlLogo from '../images/postgresql.png';
import ReactLogo from '../images/react.png';
import SpringBootLogo from '../images/springboot.png';

/**
 * @name About
 * @description Displays home page elements like sliders
 * @returns Home Page
 */
const About = () => {
  const [reverse, setReverse] = useState(false);
  const [fullTitle] = useState(Constants.ABOUT_ME_TITLE);
  const [titleIndex, setTitleIndex] = useState(0);

  useEffect(() => {
    if (titleIndex > fullTitle.length) {
      setTimeout(() => {
        setReverse(true);
      }, 100);
      return;
    }

    if (!reverse) {
      setTimeout(() => {
        setTitleIndex(titleIndex + 1);
      }, 100);
    } else if (reverse) {
      setTimeout(() => {
        setTitleIndex(titleIndex - 1);
      }, 50);
    }
  });

  return (
    <div className={classes.aboutPage}>
      <div className={classes.aboutTitleContainer}>
        <h1 className={classes.aboutTitle}>{fullTitle.substring(0, titleIndex)}</h1>
        <div className={classes.cursor} />
      </div>
      <div className={classes.descriptionContainer}>
        <p className={classes.aboutDescription}>{Constants.ABOUT_ME_DESCRIPTION}</p>
      </div>
      <div className={classes.descriptionContainer2}>
        <p className={classes.aboutDescription2}>{Constants.ABOUT_ME_DESCRIPTION2}</p>
      </div>
      <div className={classes.descriptionContainer3}>
        <p className={classes.aboutDescription3}>{Constants.ABOUT_ME_DESCRIPTION3}</p>
      </div>
      <h2 className={classes.sliderTitle_tech}>
        <span>
          Frameworks
          <span>&</span>
          Technologies
        </span>
      </h2>
      <section className={classes.techSlider}>
        <div className={classes.slider_tech}>
          <span style={{ '--i': 1 }} className={classes.imageContainer_tech}>
            <img
              className={classes.sliderImage_tech}
              src={AndroidLogo}
              alt={Constants.ANDROID_ALT}
            />
            <div className={classes.ovalShadow_tech} />
          </span>
          <span style={{ '--i': 2 }} className={classes.imageContainer_tech}>
            <img
              className={classes.sliderImage_tech}
              src={DotNetLogo}
              alt={Constants.DOT_NET_ALT}
            />
            <div className={classes.ovalShadow_tech} />
          </span>
          <span style={{ '--i': 3 }} className={classes.imageContainer_tech}>
            <img
              className={classes.sliderImage_tech}
              src={PostgresqlLogo}
              alt={Constants.POSTGRESQL_ALT}
            />
            <div className={classes.ovalShadow_tech} />
          </span>
          <span style={{ '--i': 4 }} className={classes.imageContainer_tech}>
            <img className={classes.sliderImage_tech} src={ReactLogo} alt={Constants.REACT_LOGO} />
            <div className={classes.ovalShadow_tech} />
          </span>
          <span style={{ '--i': 5 }} className={classes.imageContainer_tech}>
            <img
              className={classes.sliderImage_tech}
              src={SpringBootLogo}
              alt={Constants.SPRINGBOOT_ALT}
            />
            <div className={classes.ovalShadow_tech} />
          </span>
        </div>
      </section>
      <h2 className={classes.sliderTitle_code}>
        <span>
          <span>Coding</span>
          Languages
        </span>
      </h2>
      <section className={classes.codeSlider}>
        <div className={classes.slider_code}>
          <span style={{ '--i': 1 }} className={classes.imageContainer_code}>
            <img className={classes.sliderImage_code} src={CPluslogo} alt={Constants.C_PLUS_ALT} />
            <div className={classes.ovalShadow_code} />
          </span>
          <span style={{ '--i': 2 }} className={classes.imageContainer_code}>
            <img
              className={classes.sliderImage_code}
              src={CSharpLogo}
              alt={Constants.C_SHARP_ALT}
            />
            <div className={classes.ovalShadow_code} />
          </span>
          <span style={{ '--i': 3 }} className={classes.imageContainer_code}>
            <img className={classes.sliderImage_code} src={HtmlLogo} alt={Constants.HTML_ALT} />
            <div className={classes.ovalShadow_code} />
          </span>
          <span style={{ '--i': 4 }} className={classes.imageContainer_code}>
            <img className={classes.sliderImage_code} src={CssLogo} alt={Constants.CSS_ALT} />
            <div className={classes.ovalShadow_code} />
          </span>
          <span style={{ '--i': 5 }} className={classes.imageContainer_code}>
            <img
              className={classes.sliderImage_code}
              src={JavaScriptLogo}
              alt={Constants.JAVASCRIPT_ALT}
            />
            <div className={classes.ovalShadow_code} />
          </span>
          <span style={{ '--i': 6 }} className={classes.imageContainer_code}>
            <img className={classes.sliderImage_code} src={JavaLogo} alt={Constants.JAVA_ALT} />
            <div className={classes.ovalShadow_code} />
          </span>
          <span style={{ '--i': 7 }} className={classes.imageContainer_code}>
            <img className={classes.sliderImage_code} src={KotlinLogo} alt={Constants.KOTLIN_ALT} />
            <div className={classes.ovalShadow_code} />
          </span>
          <span style={{ '--i': 8 }} className={classes.imageContainer_code}>
            <img className={classes.sliderImage_code} src={PythonLogo} alt={Constants.PYTHON_ALT} />
            <div className={classes.ovalShadow_code} />
          </span>
        </div>
      </section>
    </div>
  );
};

export default About;
