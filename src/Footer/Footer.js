import React from 'react';
import styled from 'styled-components';

const FooterInfo = styled.footer`
  padding: 4em 0;
  background: #5C6BC0;
  color: #E8EAF6;
  position: relative;
  margin-top: 20px;
  width: 100%;
`;

const Footer = () => (
  <FooterInfo className="has-text-centered">
    <p>{ 'lucy@lucyconklin.com' }</p>
    <p>{ "lucy conklin 2017" }</ p>
  </FooterInfo>
)

export default Footer;