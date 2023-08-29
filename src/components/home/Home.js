import React, { useState, useEffect } from 'react';
import classes from './Home.module.css';

/**
 * @name Home
 * @description home page
 * @returns Home Page
 */
const Home = () => {
  const [reverse, setReverse] = useState(false);
  const [wordChanged, setWordChanged] = useState(true);
  const [words] = useState(['Developer', 'Musician', 'Designer', 'Entrepreneur']);
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);

  useEffect(() => {
    if (!wordChanged) {
      if (index + 1 === words.length) {
        setIndex(0);
      } else {
        setIndex(index + 1);
      }

      setWordChanged(true);
      return;
    }

    // if title is fully visible start to delete text
    if (
      subIndex === words[index].length + 1 && !reverse
    ) {
      setTimeout(() => {
        setReverse(true);
      }, 1000);
      return;
    }

    // if title has been fully deleted start to type again
    if (subIndex === 0 && reverse) {
      setTimeout(() => {
        setReverse(false);
        setWordChanged(false);
      }, 500);
      return;
    }

    // handles removing an index or adding index
    // to display the text
    setTimeout(() => {
      setSubIndex(subIndex + (reverse ? -1 : 1));
    }, reverse ? 100 : 175);
    /**  */
  }, [index, words, subIndex, reverse, wordChanged]);

  return (
    <div className={classes.homePageContainer}>
      <h2 className={classes.homeTitle}>
        I&apos;m a
        {' '}
        <span>{words[index].substring(0, subIndex)}</span>
      </h2>
      <div className={classes.boxes}>
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
      </div>
    </div>
  );
};

export default Home;
