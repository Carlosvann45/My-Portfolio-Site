import React, { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import classes from './PageLayout.module.css';

/**
 * @name AdminLayout
 * @description
 * @returns AdminLayout Page
 */
const AdminLayout = () => {
  // handles redirect if only admin path
  useEffect(() => {
    const location = window.location.pathname;

    if (location === '/admin') {
      window.location.pathname = `${location}/login`;
    }
  });

  return (
    <div className={classes.siteContainer}>
      <div className={classes.pageContainer}>
        <Outlet />
      </div>
    </div>
  );
};

export default AdminLayout;
