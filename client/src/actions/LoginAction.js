export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

function requestLogin(user) {
  return {
    type: LOGIN_REQUEST,
    isAuthenticated: false,
    user
  };
}

function loginSuccess(auth) {
  return {
    type: LOGIN_SUCCESS,
    isAuthenticated: true,
    auth
  };
}

function loginError(message) {
  return {
    type: LOGIN_FAILURE,
    isAuthenticated: false,
    message
  };
}

export function loginUser(users) {
  const config = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(users)
  };

  return dispatch => {
    dispatch(requestLogin(users));
    return fetch('/api/user', config)
      .then(response =>
        response.json().then(auth => ({ auth, response }))
      ).then(({ auth, response }) => {
        if (!response.ok) {
          dispatch(loginError(auth.message));
          return Promise.reject(auth);
        }
        dispatch(loginSuccess(auth));
      }).catch(err => console.log('Error: ', err));
  };
}
