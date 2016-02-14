import * as types from '../constants/ActionTypes';
import cookie from 'react-cookie';
import { COOKIE_DEFAULT_CONFIG } from '../config/CookieConfig';

const AUTH_API_ROOT = '/api/auth';

function successLogout() {

  // why can't remove to server?
  cookie.remove('token', COOKIE_DEFAULT_CONFIG);
  cookie.remove('name', COOKIE_DEFAULT_CONFIG);
  cookie.remove('avatar_url', COOKIE_DEFAULT_CONFIG);

  return {
    type: types.LOGOUT_SUCCESS,
    isAuthenticated: false
  };
}

function requestLogout(param) {

  return {
    type: types.LOGOUT_REQUEST,
    payload: {

      api: `${AUTH_API_ROOT}/logout`,
      method: 'POST',
      body: {
        token: param.token
      },
      callback: (dispatch, response) => dispatch(successLogout(response))
    }
  };
}

function fetchUser(dispatch, request) {

  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };

  if (request && request.payload) {

    config.body = JSON.stringify(request.payload.body);
    config.method = request.payload.method;

    return fetch(request.payload.api, config).then(response =>
      response.json().then(auth => ({ auth, response }))
    ).then(({ auth, response }) => {
      if (!response.ok) {
        console.log(' ERROR ');
        return Promise.reject(auth);
      }
      request.payload.callback(dispatch, auth);
    }).catch(err => console.error('ERROR: ', err));
  }
}


export function logout(param) {

  return dispatch => {
    const request = dispatch(requestLogout(param));
    fetchUser(dispatch, request);
  };
}
