import React from 'react';
import Header1 from '../../Typography/Header1';
import Paragraph from '../../Typography/Paragraph';
import GradientText from '../../Typography/GradientText';
import Button from '../../components/Button';

const About = () => (
  <div>
    <Header1>About</Header1>
    <Paragraph>This is a regular paragraph.</Paragraph>
    <GradientText>This is gradient text.</GradientText>
    <Button text={'Primary Button'}/>
    <a class="button is-link">Link Button</a>
    <a class="button is-info">Info Button</a>
    <a class="button is-success">Success Button</a>
    <a class="button is-warning">Warning Button</a>
    <a class="button is-danger">Danger Button</a>
  </div>
)

export default About;