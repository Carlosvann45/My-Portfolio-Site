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
import AndroidLogo from '../images/android.png';
import DotNetLogo from '../images/dot-net.png';
import PostgresqlLogo from '../images/postgresql.png';
import ReactLogo from '../images/react.png';
import SpringBootLogo from '../images/springboot.png';

/**
 * @name Home
 * @description Displays home page elements like sliders
 * @returns Home Page
 */
const Home = () => (
  <div className={classes.homePage}>
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
          <img className={classes.sliderImage_tech} src={AndroidLogo} alt={Constants.C_PLUS_ALT} />
          <div className={classes.ovalShadow_tech} />
        </span>
        <span style={{ '--i': 2 }} className={classes.imageContainer_tech}>
          <img className={classes.sliderImage_tech} src={DotNetLogo} alt={Constants.C_SHARP_ALT} />
          <div className={classes.ovalShadow_tech} />
        </span>
        <span style={{ '--i': 3 }} className={classes.imageContainer_tech}>
          <img className={classes.sliderImage_tech} src={PostgresqlLogo} alt={Constants.HTML_ALT} />
          <div className={classes.ovalShadow_tech} />
        </span>
        <span style={{ '--i': 4 }} className={classes.imageContainer_tech}>
          <img className={classes.sliderImage_tech} src={ReactLogo} alt={Constants.CSS_ALT} />
          <div className={classes.ovalShadow_tech} />
        </span>
        <span style={{ '--i': 5 }} className={classes.imageContainer_tech}>
          <img
            className={classes.sliderImage_tech}
            src={SpringBootLogo}
            alt={Constants.JAVASCRIPT_ALT}
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
          <img className={classes.sliderImage_code} src={CSharpLogo} alt={Constants.C_SHARP_ALT} />
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

export default Home;
