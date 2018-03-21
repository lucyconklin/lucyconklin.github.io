import React, { Component } from 'react';
import styled from 'styled-components';
import HeaderNavItem from './HeaderNavItem/HeaderNavItem';

const Nav = styled.section`
  height: 80px;
`;

const NavItems = [ { name: 'About'}, { name: 'Home'}, { name: 'Contact'}]

class HeaderNav extends Component {
  render(
  ) 
  {
    return (
      <Nav>
        <HeaderNavItem name="About" path="/about"/>
        <HeaderNavItem name="Home" path="/home"/>
        <HeaderNavItem name="Contact" path="/contact"/>
        <HeaderNavItem name="Projects" path="/projects"/>
        <HeaderNavItem name="Now" path="/now"/>
      </Nav>
    );
  }
}

export default HeaderNav;