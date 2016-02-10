import React, { Component, PropTypes } from 'react';

export default class LoginForm extends Component {

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.refs.username.focus();
  }

  handleClick() {
    const username = this.refs.username.value.trim();
    const password = this.refs.password.value.trim();
    this.props.onLoginHandler({ username, password }); // object-shorthand
  }

  render() {
    return (
      <div>
        <input type="text" name="username" ref="username" className="form-control" placeholder="Username"/>
        <input type="password" name="password" ref="password" className="form-control" placeholder="Password"/>
        <button onClick={this.handleClick} className="btn btn-primary">
          Login
        </button>
      </div>
    );
  }
}

LoginForm.propTypes = {
  onLoginHandler: PropTypes.func.isRequired
};
