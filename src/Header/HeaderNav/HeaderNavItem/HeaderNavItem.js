import React, { Component } from 'react';
import styled from 'styled-components';

const NavItem = styled.section`
  color: #304D6E;
`;

class HeaderNavItem extends Component {
  render(
  ) 
  {
    return (
      <NavItem>{ this.props.name }</NavItem>
    );
  }
}

export default HeaderNavItem;