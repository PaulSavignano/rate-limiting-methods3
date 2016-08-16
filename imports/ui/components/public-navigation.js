import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { Nav, NavItem } from 'react-bootstrap';

export const PublicNavigation = () => (
  <div>
    <Nav>
      <LinkContainer to="swarm">
        <NavItem eventKey={ 1 } href="/swarm">Swarm</NavItem>
      </LinkContainer>
    </Nav>
    <Nav pullRight>
      <LinkContainer to="signup">
        <NavItem eventKey={ 2 } href="/signup">Sign Up</NavItem>
      </LinkContainer>
      <LinkContainer to="login">
        <NavItem eventKey={ 3 } href="/login">Log In</NavItem>
      </LinkContainer>
    </Nav>
  </div>
);
