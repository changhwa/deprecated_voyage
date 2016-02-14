import React, { Component, PropTypes } from 'react';
import {
  Nav,
  NavItem,
  Navbar,
  NavDropdown,
  MenuItem
} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { connect } from 'react-redux';
import { logout } from '../actions/LoginAction';


export default class HeadNav extends Component {

  constructor(props) {
    super(props);
  }

  handlerLogout(token, dispatch, e) {
    e.preventDefault();
    const param = {};
    param.type = 'LOGOUT_REQUEST';
    param.token = token;
    dispatch(logout(param));
  }

  render() {

    const { dispatch, isAuthenticated, name, token } = this.props;

    return (
      <Navbar>
        <Nav pullRight>
          {isAuthenticated ? (
            <NavDropdown eventKey={1} title={ name } id="nav-dropdown">
              <MenuItem eventKey={1.1}>Profile</MenuItem>
              <MenuItem eventKey={1.2} onClick ={this.handlerLogout.bind(this, token, dispatch)}>Logout</MenuItem>
            </NavDropdown>
          ) : (
            <LinkContainer to={{ pathname: '/login' }}>
              <NavItem eventKey={1}>Login</NavItem>
            </LinkContainer>
          )}
        </Nav>
      </Navbar>
    );
  }
}
function mapStateToProps(state) {

  const { auth } = state;
  const { isAuthenticated, name, token } = auth;

  return { isAuthenticated, name, token };
}

HeadNav.propTypes = {
  dispatch: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
  name: PropTypes.string,
  token: PropTypes.string
};

export default connect(mapStateToProps)(HeadNav);
