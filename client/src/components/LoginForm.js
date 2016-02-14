import React, { Component, PropTypes } from 'react';
import { Panel } from 'react-bootstrap';
import Icon from 'react-fa';

export default class LoginForm extends Component {

  constructor(props) {
    super(props);
  }

  handleClick(type, e) {
    e.preventDefault();
    const url = `/api/auth/${type}`;
    this.props.onHandlerLogin(url);
  }

  render() {

    const githubLoginClick = this.handleClick.bind(this, 'github');

    return (
      <Panel style={{ width: '350', margin: '0 auto' }}>
        <div className="text-center">
          <h4 className="content-group">Login!</h4>
        </div>
        <hr />
        <div className="row">
          <div className="col-md-6 row-block">
            <a href="#"
              className="btn btn-block"
              style={{ backgroundColor: '#3F639E', color: '#fff' }}
            >
              <Icon name="facebook-official" />&nbsp; Facebook
            </a>
          </div>
          <div className="col-md-6 row-block">
            <a href="#"
              className="btn btn-block"
              onClick={githubLoginClick}
              style={{ backgroundColor: '#474949', color: '#fff' }}
            >
              <Icon name="github" />
              &nbsp;Github
            </a>
          </div>
        </div>
      </Panel>
    );
  }
}

LoginForm.propTypes = {
  onHandlerLogin: PropTypes.func.isRequired
};
