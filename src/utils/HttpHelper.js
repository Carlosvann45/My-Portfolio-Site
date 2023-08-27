import Cookies from 'universal-cookie';
import Constants from './Constants';

/**
 * @name HttpHelper
 * @description - Utility method for using fetch in a convenient manner
 * @param {string} route address to ping
 * @param {string} method http method
 * @param {Object} payload object to send
 * @param {Boolean} isRefreshToken object to send
 * @return {Promise} - Promise from the fetch call
 */
const HttpHelper = (route, method, payload, isRefreshToken = false) => {
  const cookies = new Cookies();
  const tokens = cookies.get('tokens');
  let headers = {
    'Content-Type': 'application/json'
  };

  if (tokens.token && !isRefreshToken) {
    headers = {
      ...headers,
      Authorization: `Bearer ${tokens.token}`
    };
  } else if (tokens.refreshToken && isRefreshToken) {
    headers = {
      ...headers,
      Authorization: `Bearer ${tokens.refreshToken}`
    };
  }

  return fetch(Constants.BASE_URL_API + route, {
    method,
    headers,
    body: JSON.stringify(payload)
  });
};

export default HttpHelper;
