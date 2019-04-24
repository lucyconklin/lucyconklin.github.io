import React, { Component } from 'react';
import styled from 'styled-components';
import HeaderNavItem from './HeaderNavItem/HeaderNavItem';

const Nav = styled.section`
  height: 80px;
  margin-top: 28px;
  float: left;
`;

const routes = [
  {
    path: '/',
    name: 'Home'
  },
  {
    path:'/resume',
    name:'Resume'
  }
]

const routeLinks = routes.map((route, i) => <HeaderNavItem key={i} {...route} />)

class HeaderNav extends Component {
  render(
  ) 
  {
    return (
      <Nav>
        { routeLinks }
      </Nav>
    );
  }
}

export default HeaderNav;