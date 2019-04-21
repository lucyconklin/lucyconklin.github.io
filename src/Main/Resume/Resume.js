import React from 'react';
import styled from 'styled-components';
import Header1 from '../../typography/Header1';
import Paragraph from '../../typography/Paragraph';
import GradientText from '../../typography/GradientText';
import ResumeItem from './ResumeItem/ResumeItem';

const Resume = () => (
  <section>
    <GradientText>Lucy Conklin</GradientText>
    <Header1>Projects</Header1>
    <Paragraph>Resume</Paragraph>
    <ResumeItem heading="Project 1" description="description" year="2018"/>
    <Header1>Experience</Header1>
    <Paragraph>Resume</Paragraph>
    <Header1>Education</Header1>
  </section>
)

export default Resume;