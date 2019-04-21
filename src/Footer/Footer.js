import React from 'react';
import styled from 'styled-components';

const FooterInfo = styled.div`
  padding: 4em 0;
  position: relative;
  margin-top: 20px;
  background-color: #374c5f;
  color: rgba(255,255,255,0.8);
`;

const Footer = () => (
  <FooterInfo className="has-text-centered is-primary">
    <p>{ 'lucy@lucyconklin.com' }</p>
    <p>{ "lucy conklin 2017" }</ p>
  </FooterInfo>
)

export default Footer;