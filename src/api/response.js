import axios from "axios";
import {getRefreshToken} from '@/api/service/authService'

// error handling
const _axios = axios;
axios.interceptors.response.use(
    response => response,
    error => {

  const errorCode = error.response.status;

  if (errorCode === 400) {
    // error handling code
    return Promise.reject("Bad Request");
  }

  // call refreshToken
  if (errorCode === 403) {
    return getRefreshToken()
        .then(token => {
          _axios.headers['Authorization'] = token;
          return _axios.request(error.config);
        })
        .catch(error => {
          console.error("Error getRefreshToken()")
        })
  }

  else if (errorCode === '500') {
    // error handling code
    return Promise.reject("Internal Server Error");
  }

  return Promise.reject(error);
})