import React, { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Cookies from 'universal-cookie';
import HttpHelper from '../../utils/HttpHelper';
import classes from './PageLayout.module.css';
import Constants from '../../utils/Constants';
import 'react-toastify/dist/ReactToastify.css';

/**
 * @name AdminLayout
 * @description
 * @returns AdminLayout Page
 */
const AdminLayout = () => {
  const navigate = useNavigate();

  // handles redirect for authorization
  useEffect(() => {
    const checkTokens = async () => {
      const cookies = new Cookies();
      const token = cookies.get('token');
      const refreshToken = cookies.get('refresh_token');

      if (token && refreshToken) {
        let response = await HttpHelper(Constants.VERIFY_TOKEN_ROUTE, 'GET');

        if (response.status === 200) {
          navigate('/admin');
          return;
        }

        response = await HttpHelper(Constants.VERIFY_TOKEN_ROUTE, 'GET', {}, true);

        if (response.status === 200) {
          cookies.set('tokens', response);

          navigate('/admin');

          return;
        }
      }

      navigate('/admin/login');
    };

    checkTokens().catch(() => {
      navigate('/admin/login');
    });
  }, [navigate]);

  return (
    <div className={classes.siteContainer}>
      <div className={classes.pageContainer}>
        <Outlet />
      </div>
      <ToastContainer />
    </div>
  );
};

export default AdminLayout;
