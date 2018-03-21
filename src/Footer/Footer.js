import React, { Component } from 'react';
import styled from 'styled-components';

const FooterInfo = styled.section`
  padding: 4em 0;
  background: #5C6BC0;
  color: #E8EAF6;
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
      <FooterInfo>
        <p>{ 'lucy@lucyconklin.com' }</p>
        <p>{ "lucy conklin 2017" }</ p>
      </FooterInfo>
    );
  }
}

export default Footer;