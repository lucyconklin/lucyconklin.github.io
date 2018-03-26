import React, { Component } from 'react';
import Header1 from '../../Typography/Header1';
import Paragraph from '../../Typography/Paragraph';
import styled from 'styled-components';

class About extends Component {
  render(
  ) 
  {
    return (
      <div>
        <Header1>About</Header1>
        <Paragraph>This is a paragraph</Paragraph>
      </div>
    );
  }
}

export default About;