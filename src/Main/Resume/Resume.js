import React from 'react';
import styled from 'styled-components';
import Header1 from '../../typography/Header1';
import Header3 from '../../typography/Header3';
import Paragraph from '../../typography/Paragraph';
import GradientText from '../../typography/GradientText';
import ResumeItem from './ResumeItem/ResumeItem';
import EducationItem from './EducationItem/EducationItem';

const resume = [
  {
    company: 'SingleOps',
    year: '2017-current',
    position: 'Web Developer',
    description: 'Full-stack developer ',
    skills: ['Ruby on Rails', 'mySQL', 'AWS', 'Bootstrap', 'jQuery']
  }
]

const resumeItems = resume.map((resumeItem, i) => <ResumeItem key={i} {...resumeItem} />)

const education = [
  {
    school: 'Turing School of Software and Design',
    year: '2016-2017',
    description: 'Back-end web development',
    skills: ['Ruby on Rails', 'HTML', 'CSS', 'Javascript', 'React', 'jQuery']
  }
]

const educationItems = education.map((educationItem, i) => <EducationItem key={i} {...educationItem} />)

const Resume = () => (
  <section>
    <GradientText>Lucy Conklin</GradientText>
    <Header1>Projects</Header1>
    <Paragraph>Resume</Paragraph>
    <ResumeItem heading="Project 1" description="description" year="2018"/>
    <Header1>Experience</Header1>
    { resumeItems }
    <Header3>SingleOps</Header3>
    <Header1>Education</Header1>
    { educationItems }
  </section>
)

export default Resume;