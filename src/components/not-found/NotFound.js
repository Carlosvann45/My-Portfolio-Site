import React from 'react';
import classes from './NotFound.module.css';
import Logo from '../images/not-found.png';

/**
 * @name NotFound
 * @description Displays 404 page
 * @returns NotFound Page
 */
const NotFound = () => (
  <div className={classes.pageContainer} data-testid="container">
    <div className={classes.notFound} data-testid="content">
      <h1>Oops! Something went wrong.</h1>
      <h2>Sorry, we were unable to find this page.</h2>
    </div>
    <img src={Logo} alt="Broken Robot" />
  </div>
);

export default NotFound;
