import React, {
  useEffect, useState, useRef
} from 'react';
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
import PicterOfMe from '../images/picture-of-me.jpg';

/**
 * @name About
 * @description Displays home page elements like sliders and about description
 * @returns About Page
 */
const About = () => {
  const techSliderTitle = useRef(null);
  const codeSliderTitle = useRef(null);
  const contactTitle = useRef(null);
  const [isTechTitleInView, setIsTechTitleInView] = useState(false);
  const [isCodeTitleInView, setIsCodeTitleInView] = useState(false);
  const [isContactTitleInView, setIsContactTitleInView] = useState(false);
  const [reverse, setReverse] = useState(false);
  const [fullTitle] = useState(Constants.ABOUT_ME_TITLE);
  const [titleIndex, setTitleIndex] = useState(0);
  const [contactInfo, setContactInfo] = useState({});

  /**
   * @name handleChange
   * @description handles on change event for contact info on the page
   * @param {Event} event
   */
  const handleChange = (event) => {
    const { value } = event.target;
    const { id } = event.target;

    setContactInfo({ ...contactInfo, [id]: value });
  };

  useEffect(() => {
    // if title is fully visible start to delete text
    if (titleIndex > fullTitle.length && !reverse) {
      setTimeout(() => {
        setReverse(true);
      }, 5000);
      return;
    }

    // if title has been fully deleted start to type again
    if (titleIndex === 0 && reverse) {
      setTimeout(() => {
        setReverse(false);
      }, 1000);

      return;
    }

    // handles removing an index or adding index
    // to display the text
    setTimeout(() => {
      setTitleIndex(titleIndex + (reverse ? -1 : 1));
    }, (reverse ? 75 : 150));
  });

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          switch (entry.target.id) {
            case 'techSliderTitle':
              setIsTechTitleInView(true);
              break;
            case 'codeSliderTitle':
              setIsCodeTitleInView(true);
              break;
            case 'contactTitle':
              setIsContactTitleInView(true);
              break;
            default:
          }
        }
      });
    });

    observer.observe(techSliderTitle.current);
    observer.observe(codeSliderTitle.current);
    observer.observe(contactTitle.current);

    return () => {
      observer.disconnect();
    };
  });

  return (
    <div className={classes.aboutPage}>
      <div className={classes.aboutTitleContainer}>
        <h1 className={classes.aboutTitle}>{fullTitle.substring(0, titleIndex)}</h1>
      </div>
      <section className={classes.allDescriptions}>
        <div className={classes.descriptionContainer}>
          <img
            className={classes.descriptionImage}
            src={PicterOfMe}
            alt={Constants.PICTURE_OF_ME_ALT}
          />
          <p className={classes.aboutDescription}>{Constants.ABOUT_ME_DESCRIPTION}</p>
        </div>
        <div className={classes.descriptionContainer2}>
          <p className={classes.aboutDescription2}>{Constants.ABOUT_ME_DESCRIPTION2}</p>
        </div>
        <div className={classes.descriptionContainer3}>
          <p className={classes.aboutDescription3}>{Constants.ABOUT_ME_DESCRIPTION3}</p>
        </div>
      </section>
      <h2
        id="techSliderTitle"
        className={`${classes.hidden} ${isTechTitleInView ? classes.sliderTitle_tech : ''}`}
        ref={techSliderTitle}
      >
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
      <h2
        id="codeSliderTitle"
        className={`${classes.hidden} ${isCodeTitleInView ? classes.sliderTitle_code : ''}`}
        ref={codeSliderTitle}
      >
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
      <h2
        id="contactTitle"
        className={`${classes.hidden} ${isContactTitleInView ? classes.contactTitle : ''}`}
        ref={contactTitle}
      >
        <span>
          <span>
            Contact
          </span>
          Information
        </span>
      </h2>
      <section className={classes.contactFormContainer}>
        <div className={classes.contactForm}>
          <div className={classes.contactDescriptionContainer}>
            <p className={classes.contactDescription}>{Constants.CONTACT_DESCRIPTION}</p>
          </div>
          <label className={classes.emailContainer} htmlFor="emailInput">
            <span className={classes.emailTitle}>Email</span>
            <input
              id="email"
              onChange={handleChange}
              className={classes.emailInput}
              type="email"
              name="emailInput"
            />
          </label>
          <label className={classes.subjectContainer} htmlFor="subjectInput">
            <span className={classes.subjectTitle}>Subject</span>
            <input
              id="subject"
              onChange={handleChange}
              className={classes.subjectInput}
              type="subject"
              name="subjectInput"
            />
          </label>
          <label className={classes.messageContainer} htmlFor="emailMessage">
            <span className={classes.messageTitle}>Message</span>
            <textarea
              id="message"
              className={classes.messageInput}
              onChange={handleChange}
              name="emailMessage"
              rows="8"
              cols="25"
            />
          </label>
          <div className={classes.btnContainer}>
            <button className={classes.sendEmailBtn} type="button">Send</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
