import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const FooterInfo = styled.div`
  padding: 4em 0;
  position: relative;
  margin-top: 20px;
  background-color: #374c5f;
  color: rgba(255,255,255,0.8);
`;

const StyledFooterIcon = styled(FontAwesomeIcon)`
  color: orchid;
`;

const Footer = () => (
  <FooterInfo className="has-text-centered is-primary">
    <h4>{ 'lucy@lucyconklin.com' }</h4>
    <p>{ "lucy conklin 2017" }</ p>
  </FooterInfo>
)

export default Footer;