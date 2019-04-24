import React, { Component } from 'react';
import GradientText from '../../typography/GradientText';
import Paragraph from '../../typography/Paragraph'

class Home extends Component {
  render(
  ) 
  {
    return (
      <div>
        <GradientText>Lucy Conklin</GradientText>
        <Paragraph>
          I'm a developer and designer for SingleOps. Currently based in Colorado.
        </Paragraph>
      </div>
    );
  }
}

export default Home;