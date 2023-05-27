import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../header/Header';
import classes from './PageLayout.module.css';

/**
 * @name PageLayout
 * @description
 * @returns PageLayout Page
 */
const PageLayout = () => (
  <div className={classes.siteContainer}>
    <Header />
    <div className={classes.pageContainer}>
      <Outlet />
    </div>
  </div>
);

export default PageLayout;
