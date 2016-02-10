import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import LoginForm from '../components/LoginForm';
import { loginUser } from '../actions/LoginAction';

class Login extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    const { dispatch, isAuthenticated } = this.props;
    return (
      <div>
        <LoginForm onLoginHandler={user => dispatch(loginUser(user))} />
        {isAuthenticated &&
          <p>Login Success</p>
        }
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { auth } = state;
  const { isAuthenticated, errorMessage } = auth;

  return {
    isAuthenticated,
    errorMessage
  };
}

Login.propTypes = {
  dispatch: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
  errorMessage: PropTypes.string
};

export default connect(mapStateToProps)(Login);
