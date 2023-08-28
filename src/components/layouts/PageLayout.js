import React from 'react';
import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Header from '../header/Header';
import classes from './PageLayout.module.css';
import 'react-toastify/dist/ReactToastify.css';

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
    <ToastContainer />
  </div>
);

export default PageLayout;
