import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom'

const NavItem = styled.section`
  color: #304D6E;
  display: inline-block;
  padding: 8px;
  margin: 8px;
  text-decoration: none;
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
        <Link to={this.props.path}>{this.props.name}</Link>
      </NavItem>
    );
  }
}

export default HeaderNavItem;