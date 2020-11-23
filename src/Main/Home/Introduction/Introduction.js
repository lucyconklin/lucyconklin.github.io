import React, { Component } from 'react';
import styled from 'styled-components';
import GradientText from '../../../Typography/GradientText';
import Paragraph from '../../../Typography/Paragraph';

const StyledIntroduction = styled.section`
  height: 400px;
  width: 50%;
  
  @media (max-width: 1000px) {
    width: 80%;
  
  @media (max-width: 700px) {
    width: 100%;
`;

class Introduction extends Component {
  render(
  ) 
  {
    return (
      <StyledIntroduction>
        <GradientText>Lucy Conklin</GradientText>
        <Paragraph>
          I'm a software developer at <a href="www.homebound.com">Homebound</a>. Currently based in Colorado. I love working on interesting problems, with a team, in an environment where I never stop learning.
        </Paragraph>
      </StyledIntroduction>
    );
  }
}

export default Introduction;