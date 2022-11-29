import React from 'react';
import classes from './Home.module.css';
import Constants from '../../utils/Constants';
import CPluslogo from '../images/c-plus-plus.png';
import CSharpLogo from '../images/c-sharp.png';
import HtmlLogo from '../images/html5.png';
import CssLogo from '../images/css3.png';
import JavaScriptLogo from '../images/javascript.png';
import JavaLogo from '../images/java.png';
import KotlinLogo from '../images/kotlin.png';
import PythonLogo from '../images/python.png';

/**
 * @name Home
 * @description Displays home page elements like sliders
 * @returns Home Page
 */
const Home = () => (
  <div className={classes.homePage}>
    <h2 className={classes.languageSliderTitle}>Languages</h2>
    <section className={classes.languageSlider}>
      <div className={classes.slider}>
        <span style={{ '--i': 1 }} className={classes.imageContainer}>
          <img className={classes.sliderImage} src={CPluslogo} alt={Constants.C_PLUS_ALT} />
        </span>
        <span style={{ '--i': 2 }} className={classes.imageContainer}>
          <img className={classes.sliderImage} src={CSharpLogo} alt={Constants.C_SHARP_ALT} />
        </span>
        <span style={{ '--i': 3 }} className={classes.imageContainer}>
          <img className={classes.sliderImage} src={HtmlLogo} alt={Constants.HTML_ALT} />
        </span>
        <span style={{ '--i': 4 }} className={classes.imageContainer}>
          <img className={classes.sliderImage} src={CssLogo} alt={Constants.CSS_ALT} />
        </span>
        <span style={{ '--i': 5 }} className={classes.imageContainer}>
          <img
            className={classes.sliderImage}
            src={JavaScriptLogo}
            alt={Constants.JAVASCRIPT_ALT}
          />
        </span>
        <span style={{ '--i': 6 }} className={classes.imageContainer}>
          <img className={classes.sliderImage} src={JavaLogo} alt={Constants.JAVA_ALT} />
        </span>
        <span style={{ '--i': 7 }} className={classes.imageContainer}>
          <img className={classes.sliderImage} src={KotlinLogo} alt={Constants.KOTLIN_ALT} />
        </span>
        <span style={{ '--i': 8 }} className={classes.imageContainer}>
          <img className={classes.sliderImage} src={PythonLogo} alt={Constants.PYTHON_ALT} />
        </span>
      </div>
    </section>
  </div>
);

export default Home;
