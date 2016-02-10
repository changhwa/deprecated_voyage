import { combineReducers } from 'redux';
import {
  LOGIN_REQUEST, LOGIN_SUCCESS
} from '../actions/LoginAction';

function auth(state = {
  isAuthenticated: false
}, action) {
  switch (action.type) {
    case LOGIN_REQUEST:
      return Object.assign({}, state, {
        isAuthenticated: false,
        user: action.user
      });
    case LOGIN_SUCCESS:
      return Object.assign({}, state, {
        isAuthenticated: true,
        errorMessage: '',
        auth: action.auth
      });
    default:
      return state;
  }
}

const authReducer = combineReducers({
  auth
});

export default authReducer;
