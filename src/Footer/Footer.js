import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons'

const FooterInfo = styled.div`
  position: relative;
  padding-top: 100px;
  padding-bottom: 100px;
  padding-right: 15%;
  padding-left: 15%;
  margin-top: 20px;
  background-color: #374c5f;
  text-align: left;
  
  @media (max-width: 1000px) {
    padding-right: 10%;
    padding-left: 10%;
  
  @media (max-width: 700px) {
    padding-right: 5%;
    padding-left: 5%;
  }
`;

const FooterText = styled.h4`
  font-weight: bold;
  color: #E8EAF6;
`

const SocialContainer = styled.section`
  width:50%;
  float:right;
  text-align: right;
`

const CopyrightContainer = styled.section`
  width:50%;
  float:left;
  text-align: left;
`

const StyledIcon = styled(FontAwesomeIcon)`
  color: #9FA8DA;
  font-size: 28px;
  display: inline-block;
  margin-right: 12px;
  
  &:hover {
    color: #C5CAE9;
  }
`;

const Footer = () => (
  <FooterInfo className="has-text-centered is-primary">
    <CopyrightContainer>
      <FooterText>{ 'lucy@lucyconklin.com' }</FooterText>
    </CopyrightContainer>
    <SocialContainer>
      <a href="https://github.com/lucyconklin" target="blank">
        <StyledIcon icon={ faGithub } />
      </a>
      <a href="https://www.instagram.com/lucyconklin" target="blank">
        <StyledIcon icon={ faInstagram } />
      </a>
      <a href="https://www.linkedin.com/in/lucy-conklin/" target="blank">
        <StyledIcon icon={ faLinkedin } />
      </a>
    </SocialContainer>
  </FooterInfo>
)

export default Footer;