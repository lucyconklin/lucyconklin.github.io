import React, { Component } from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom'

const NavItem = styled.section`
  display: inline-block;
  padding: 8px;
  margin: 8px;
  &:hover {
    background-color: #E8EAF6;
  }
`;

const StyledLink = styled(NavLink)`
  color: #303F9F;
  font-weight: bold;
  text-decoration: none;
  &:hover {
    color: #1A237E;
  }
`;

class HeaderNavItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      active: true
    };
  }
  
  render() {
    return (
      <NavItem>
        <StyledLink to={this.props.path} activeClassName="is-active" >{this.props.name}</StyledLink>
      </NavItem>
    );
  }
}

export default HeaderNavItem;