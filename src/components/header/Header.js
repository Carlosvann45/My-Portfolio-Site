/* eslint-disable react-hooks/exhaustive-deps */
import React, { useRef, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Constants from '../../utils/Constants';
import SelectIcon from '../images/caret-up-solid.svg';
import NavIcon from '../images/bars-solid.svg';
import Adventure from '../audio/roa-music-adventure.mp3';
import MoveMe from '../audio/liqwyd-move-me.mp3';
import SaveYou from '../audio/liqwyd-save-you.mp3';
import MissYou from '../audio/liqwyd-miss-you.mp3';
import classes from './Header.module.css';

/**
 * @name Header
 * @description header for the entire site
 */
const Header = () => {
  const headerRef = useRef();
  const history = useHistory();
  const [locationChange, setLocationChange] = useState(false);
  const [navSelected, setNavSelected] = useState('');
  const [isSticky, setIsSticky] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [showNav, setShowNav] = useState(false);
  const [selectedAudio, setSelectedAudio] = useState('missYou');
  const [sounds, setSounds] = useState({});

  useEffect(() => {
    const url = window.location.href;

    if (url.includes('/about')) setNavSelected('about');
    else if (url.includes('/experince')) setNavSelected('experince');
    else setNavSelected('home');
  }, [locationChange]);

  useEffect(() => {
    // adds shaddow to header when it gets sticky
    const header = headerRef.current;

    const observer = new IntersectionObserver(([entry]) => {
      setIsSticky(entry.intersectionRatio < 1);
    }, { threshold: [1] });

    observer.observe(header);

    // configures all audio clips
    const adventure = new Audio(Adventure);
    const moveMe = new Audio(MoveMe);
    const saveYou = new Audio(SaveYou);
    const missYou = new Audio(MissYou);

    adventure.loop = true;
    moveMe.loop = true;
    saveYou.loop = true;
    missYou.loop = true;
    adventure.autoplay = true;
    moveMe.autoplay = true;
    saveYou.autoplay = true;
    missYou.autoplay = true;
    adventure.volume = 0.1;
    moveMe.volume = 0.1;
    saveYou.volume = 0.1;
    missYou.volume = 0.1;

    adventure.load();
    moveMe.load();
    saveYou.load();
    missYou.load();

    setSounds({
      adventure,
      moveMe,
      saveYou,
      missYou
    });
  }, []);

  /**
   * @name toggleMusic
   * @description turns music on and off based on what currend song is selected
   */
  const toggleMusic = () => {
    if (!isPlaying) {
      switch (selectedAudio) {
        case 'adventure':
          sounds.adventure.play();
          break;
        case 'moveMe':
          sounds.moveMe.play();
          break;
        case 'saveYou':
          sounds.saveYou.play();
          break;
        default:
          sounds.missYou.play();
          break;
      }
    } else {
      sounds.adventure.pause();
      sounds.moveMe.pause();
      sounds.saveYou.pause();
      sounds.missYou.pause();
    }

    setIsPlaying(!isPlaying);
  };

  /**
   * @name changeSong
   * @description changes to the current song the user selects from the menu
   * @param {String} song song to change to
   */
  const changeSong = (song) => {
    if (isPlaying) {
      sounds.adventure.pause();
      sounds.moveMe.pause();
      sounds.saveYou.pause();
      sounds.missYou.pause();

      switch (song) {
        case 'adventure':
          sounds.adventure.play();
          break;
        case 'moveMe':
          sounds.moveMe.play();
          break;
        case 'saveYou':
          sounds.saveYou.play();
          break;
        default:
          sounds.missYou.play();
          break;
      }
    }

    setSelectedAudio(song);
  };

  return (
    <section ref={headerRef} className={`${classes.headerContainer} ${isSticky ? classes.sticky : ''}`}>
      <nav className={classes.headerBackground}>
        <div className={classes.musicContainer}>
          <button type="button" className={classes.imgBtn} onClick={() => setShowMenu(!showMenu)}>
            <img
              src={SelectIcon}
              className={showMenu ? classes.musicSelectorOpen : classes.musicSelector}
              alt={Constants.MUSIC_SELECTOR_ALT}
            />

          </button>
          <button
            type="button"
            className={`${classes.musicBtn} ${isPlaying ? '' : classes.musicBtnOff}`}
            onClick={() => toggleMusic()}
          >
            <span className={`${classes.stroke} ${isPlaying ? classes.animatePlay : ''}`} />
            <span className={`${classes.stroke} ${isPlaying ? classes.animatePlay : ''}`} />
            <span className={`${classes.stroke} ${isPlaying ? classes.animatePlay : ''}`} />
            <span className={`${classes.stroke} ${isPlaying ? classes.animatePlay : ''}`} />
            <span className={`${classes.stroke} ${isPlaying ? classes.animatePlay : ''}`} />
            <span className={`${classes.stroke} ${isPlaying ? classes.animatePlay : ''}`} />
            <span className={`${classes.stroke} ${isPlaying ? classes.animatePlay : ''}`} />
          </button>
          <div className={`${classes.musicOptionsContainer} ${!showMenu ? classes.hideOptions : ''}`}>
            <ul className={`${classes.musicOptions} ${isSticky ? classes.sticky : ''}`}>
              <li>
                <button
                  className={`${classes.topBtn} ${selectedAudio === 'missYou' ? classes.buttonSelected : ''}`}
                  type="button"
                  onClick={() => changeSong('missYou')}
                >
                  Miss You
                </button>

              </li>
              <li>
                <button
                  className={selectedAudio === 'adventure' ? classes.buttonSelected : ''}
                  type="button"
                  onClick={() => changeSong('adventure')}
                >
                  Adventure
                </button>
              </li>
              <li>
                <button
                  className={selectedAudio === 'moveMe' ? classes.buttonSelected : ''}
                  type="button"
                  onClick={() => changeSong('moveMe')}
                >
                  Move Me
                </button>

              </li>
              <li>
                <button
                  className={`${classes.bottomBtn} ${selectedAudio === 'saveYou' ? classes.buttonSelected : ''}`}
                  type="button"
                  onClick={() => changeSong('saveYou')}
                >
                  Save You
                </button>
              </li>
            </ul>
          </div>
        </div>
        <button type="button" className={classes.imgNavBtn} onClick={() => setShowNav(!showNav)}>
          <img
            src={NavIcon}
            className={classes.navIcon}
            alt={Constants.MUSIC_SELECTOR_ALT}
          />

        </button>
        <ul className={`${showNav ? classes.navContainer : classes.hideNav} ${isSticky ? classes.navSticky : ''}`}>
          <li className={classes.topItem}>
            <button
              type="button"
              className={navSelected === 'home' ? classes.navSelected : classes.navLink}
              onClick={() => { setLocationChange(!locationChange); history.push('/'); }}
            >
              Home
            </button>
          </li>
          <li>
            <button
              type="button"
              className={navSelected === 'about' ? classes.navSelected : classes.navLink}
              onClick={() => { setLocationChange(!locationChange); history.push('/about'); }}
            >
              About
            </button>
          </li>
          <li className={classes.bottomItem}>
            <button
              type="button"
              className={navSelected === 'experince' ? classes.navSelected : classes.navLink}
              onClick={() => { setLocationChange(!locationChange); history.push('/experince'); }}
            >
              Experince
            </button>
          </li>
        </ul>
      </nav>
    </section>
  );
};

export default Header;
