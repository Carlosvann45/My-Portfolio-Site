import { toast } from 'react-toastify';
import Cookies from 'universal-cookie';
import HttpHelper from './HttpHelper';
import Constants from './Constants';

/**
 * @name Common
 * @description common utils for functions
 */
export default class Common {
  constructor() {
    throw Error('Static class only');
  }

  /**
   * @name showToast
   * @description Handles showing toast message to user
   * @param {String} message message
   * @param {String} type error type
   */
  static showToast(message, type) {
    const options = {
      position: 'top-center',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnFocusLoss: true,
      pauseOnHover: true,
      theme: 'colored'
    };

    switch (type) {
      case 'success':
        toast.success(message, options);
        break;
      case 'warning':
        toast.warn(message, options);
        break;
      case 'error':
        toast.error(message, options);
        break;
      default:
        toast.info(message, options);
        break;
    }
  }

  /**
   * @name login
   * @description Handles sending login request to api and returns whether its
   * successful or not
   * @param {Object} credentials 
   * @returns boolean
   */
  static async login(credentials) {
    const cookies = new Cookies(null, { path: '/' });
    let loggedIn = true;

    try {
      let response = await HttpHelper(Constants.LOGIN_ROUTE, 'POST', credentials);

      response = await response.json();

      if (response.token && response.refreshToken) {
        cookies.set('token', response.token);
        cookies.set('refresh_token', response.refreshToken);

        return loggedIn;
      }

      loggedIn = false;
    } catch (err) {
      console.log(err);
      loggedIn = false;
    }

    return loggedIn;
  }

  /**
   * @name verifyTokens
   * @description Handles sending verification/refresh request to api and returns whether its
   * successful or not
   * @returns boolean
   */
  static async verifyTokens() {
    const cookies = new Cookies(null, { path: '/' });
    let isValid = true;

    try {
      let response = await HttpHelper(Constants.VERIFY_TOKEN_ROUTE, 'GET');

      response = await response.json();

      if (response.isVerified) {
        return isValid;
      }

      response = await HttpHelper(Constants.REFRSH_ROUTE, 'GET', null, true);

      response = await response.json();

      if (response.token && response.refreshToken) {
        cookies.set('token', response.token);
        cookies.set('refresh_token', response.refreshToken);
        return isValid;
      }

      isValid = false;
    } catch (err) {
      isValid = false;
    }

    return isValid;
  }
}
