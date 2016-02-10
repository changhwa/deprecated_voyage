import React, { Component } from 'react';
import {
  Nav,
  NavItem,
  Navbar
} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

export default class HeadNav extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Navbar fixedTop>
        <Navbar.Header>
          <Navbar.Brand>
          </Navbar.Brand>
            Voyage
          <Navbar.Toggle />
        </Navbar.Header>

        <Navbar.Collapse>
          <Nav pullRight>
            <LinkContainer to="/login">
              <NavItem>
                Login
              </NavItem>
            </LinkContainer>
            <NavItem>
              Signup
            </NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
