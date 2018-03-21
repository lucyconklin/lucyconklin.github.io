import React, { Component } from 'react';
import styled from 'styled-components';

const Copyright = styled.section`
  padding: 4em 0;
  background: #374c5f;
  color: white;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  text-align: center;
`;

class Footer extends Component {
  
  render(
  ) 
  {
    return (
      <div className="Footer">
        <Copyright>{ "lucy conklin 2017" }</ Copyright>
      </div>
    );
  }
}

export default Footer;