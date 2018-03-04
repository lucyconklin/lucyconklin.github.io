import React, { Component } from 'react';
import styled from 'styled-components';

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
      </Nav>
    );
  }
}

export default HeaderNav;