import React, { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Cookies from 'universal-cookie';
import HttpHelper from '../../utils/HttpHelper';
import classes from './PageLayout.module.css';
import Constants from '../../utils/Constants';

/**
 * @name AdminLayout
 * @description
 * @returns AdminLayout Page
 */
const AdminLayout = () => {
  // handles redirect for authorization
  useEffect(() => {
    const checkTokens = async () => {
      const cookies = new Cookies();
      const tokens = cookies.get('tokens');
      const path = window.location.pathname;
      console.log(path);
      if (tokens.token && tokens.refreshToken) {
        let response = await HttpHelper(Constants.VERIFY_TOKEN_ROUTE, 'GET');

        if (response.status === 200) {
          window.location.pathname = '/admin';
          return;
        }

        response = await HttpHelper(Constants.VERIFY_TOKEN_ROUTE, 'GET', {}, true);

        if (response.status === 200) {
          cookies.set('tokens', response);
          window.location.pathname = '/admin';
          return;
        }
      }
      console.log('test');
      window.location.pathname = '/login';
    };

    checkTokens().catch(() => {
      console.log('test');
      window.location.pathname = '/login';
    });
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
