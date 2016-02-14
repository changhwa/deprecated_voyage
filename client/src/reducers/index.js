import { combineReducers } from 'redux';
import * as types from '../constants/ActionTypes';
import cookie from 'react-cookie';
import { COOKIE_DEFAULT_CONFIG } from '../config/CookieConfig';

function auth(state = {
  isAuthenticated: (cookie.load('token', COOKIE_DEFAULT_CONFIG)) ? true : false,
  name: cookie.load('name', COOKIE_DEFAULT_CONFIG),
  token: cookie.load('token', COOKIE_DEFAULT_CONFIG)
}, action = {}) {

  switch (action.type) {
    case types.LOGOUT_REQUEST:
      return Object.assign({}, state, {
        isAuthenticated: true,
        token: action.token
      });
    case types.LOGOUT_SUCCESS:
      return Object.assign({}, state, {
        isAuthenticated: false
      });
    default:
      return state;
  }
}

const authReducer = combineReducers({
  auth
});

export default authReducer;
