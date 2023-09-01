import React, { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import Cookies from 'universal-cookie';
import Common from '../../utils/Common';
import classes from './PageLayout.module.css';
import 'react-toastify/dist/ReactToastify.css';

/**
 * @name AdminLayout
 * @description admin layout for reroute
 * @returns AdminLayout Page
 */
const AdminLayout = () => {
  const navigate = useNavigate();
  const cookies = new Cookies(null, { path: '/' });

  // hadnles checking if valid for user authorization
  useEffect(() => {
    const checkTokens = async () => {
      const token = cookies.get('token');
      const refreshToken = cookies.get('refresh_token');
      let isAuthorized = false;

      if (token && refreshToken) {
        isAuthorized = await Common.verifyTokens();
      }

      return isAuthorized;
    };

    checkTokens().then((isAuthorized) => {
      if (!isAuthorized) {
        navigate('/login');

        Common.showToast('Unauthorized access. Please Login', 'error');
      }
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
