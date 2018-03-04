import React, { Component } from 'react';
import styled from 'styled-components';

const Copyright = styled.section`
  padding: 4em;
  background: #374c5f;
  color: white;
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