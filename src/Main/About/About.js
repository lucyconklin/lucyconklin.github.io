import React from 'react';
import Header1 from '../../typography/Header1';
import Paragraph from '../../typography/Paragraph';
import GradientText from '../../typography/GradientText';

const About = () => (
  <div>
    <Header1>About</Header1>
    <Paragraph>This is a regular paragraph.</Paragraph>
    <GradientText>This is gradient text.</GradientText>
    <a class="button is-primary">Primary Button</a>
    <a class="button is-link">Link Button</a>
    <a class="button is-info">Info Button</a>
    <a class="button is-success">Success Button</a>
    <a class="button is-warning">Warning Button</a>
    <a class="button is-danger">Danger Button</a>
  </div>
)

export default About;