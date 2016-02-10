import reducer from '../../src/reducers'
import * as action from '../../src/actions/LoginAction'

describe('(Reducers) Auth', () => {

  it('should return the initial default state', () => {
    const state = reducer(undefined, {});
    expect(state).to.have.deep.property('auth.isAuthenticated', false);
    expect(state).to.deep.equal({ auth: {isAuthenticated: false} });
  });

  it('should return the login request state', () => {

    const fakeUser = {
      username: 'changhwa',
      password: 'changhwa1!'
    };

    const request = {
      type: action.LOGIN_REQUEST,
      user: fakeUser
    };

    const state = reducer({}, request);
    expect(state).to.have.deep.property('auth.isAuthenticated', false);
    expect(state).to.have.deep.property('auth.user.username', fakeUser.username);
  });

  it('should return the login success state', () => {

    const fakeAuth = {
      username: 'changhwa',
      token: 'test',
      roles: 'ROOT'
    };

    const request = {
      type: action.LOGIN_SUCCESS,
      token: fakeAuth.token,
      auth: fakeAuth
    };

    const state = reducer({}, request);
    expect(state).to.have.deep.property('auth.isAuthenticated', true);
    expect(state).to.have.deep.property('auth.auth', fakeAuth);
  });
});
