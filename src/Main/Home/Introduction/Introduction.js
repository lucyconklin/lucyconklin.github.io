import React, { Component } from 'react';
import styled from 'styled-components';
import GradientText from '../../../typography/GradientText';
import Paragraph from '../../../typography/Paragraph';

const StyledIntroduction = styled.section`
  height: 600px;
`;

class Introduction extends Component {
  render(
  ) 
  {
    return (
      <StyledIntroduction>
        <GradientText>Lucy Conklin</GradientText>
        <Paragraph>
          I'm a developer and designer for SingleOps. Currently based in Colorado.
        </Paragraph>
      </StyledIntroduction>
    );
  }
}

export default Introduction;