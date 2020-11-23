import React from 'react';
import './Resume.css';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faMobileAlt, faLink } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import Header4 from '../../Typography/Header4';
import GradientText from '../../Typography/GradientText';
import ProjectItem from './ProjectItem/ProjectItem'
import ResumeItem from './ResumeItem/ResumeItem';
import EducationItem from './EducationItem/EducationItem';

const ContactHeader = styled.h4`
  display: inline-block;
  color: #3F51B5;
  
  &:hover {
    color: #1A237E;
  }
`
const StyledIcon = styled(FontAwesomeIcon)`
  color: #7986CB;
  width: 20px;
  display: inline-block;
  margin-right: 6px;
  
  ${ContactHeader}:hover & {
    color: #3F51B5;
  }
`;

const ContactSection = styled.section`
  margin: 0 0 20px 0;
`

const projectList = [
  {    
    name: 'This site',
    link: '#',
    repo: 'https://github.com/lucyconklin/lucyconklin.github.io',
    description: 'To further my React skills, I started with the create-react app and added additional tools one at a time. \
      I initiated my work with React Router and added styled components.',
    skills: ['React', 'Styled Components', 'React Router'],
    year: '2018-current'
  },
  {
    name: 'International Space Station Tracker',
    link: 'https://international-space-station.herokuapp.com/',
    repo: 'https://github.com/lucyconklin/international_space_station',
    description: 'My app displays the position of the International Space Station and where people are in space, right now. \
      This project was started while at the Turing School and was a selected finalist for the Employer Demo Night.',
    skills: ['Building and Consuming APIs', 'D3.js','RSpec','Ruby on Rails', 'Heroku'],
    year: '2017'
  },
  {    
    name: 'My Illustration Portfolio',
    link: 'https://www.lucyconklin.com',
    repo: '',
    description: 'In 2010 I started my longest running and my personal pet project. \
      I took HTML/CSS classes to start coding work in order to create a site to showcase my artwork. \
      I have been continuously improving it ever since.',
    skills: ['HTML', 'CSS', 'Bootstrap'],
    year: '2010-current'
  },
  {
    name: 'Pivotal Tracker Gem (Open Source)',
    link: '',
    repo: 'https://github.com/jasonnoble/pivotal-tracker',
    description: 'This open source project is a wrapper fo the Pivotal Tracker API. \
      We were updating it to support version 5 of the API.',
    skills: ['Ruby', 'RSpec', 'OSS'],
    year: '2017'
  }
]

const projectItems = projectList.map((projectItem, i) => <ProjectItem key={i} {...projectItem} />)

const volunteerList = [
  {
    name: 'Code Apprentice',
    description: 'I volunteer a few hours a week with a high school student learning coding skills. \
      We work through paired coding challenges, and projects.',
    skills: ['HTML', 'CSS', 'Javascript', 'jQuery'],
    year: '2019'
  },
  {
    name: 'Turing School of Software and Design Alumni Committee',
    description: 'We support Turing\'s mission through recruiting new students, \
      assisting current students, helping recent graduates in their job searches, \
      and by connecting alumni through volunteer and networking events.',
    skills: [],
    year: '2018-current'
  }
]

const volunteerItems = volunteerList.map((volunteerItem, i) => <ProjectItem key={i} {...volunteerItem} />)

const resumeList = [
  {
    company: 'Homebound',
    year: '2019-current',
    position: 'Software Engineer',
    description: '\
      ',
    skills: ['GraphQL', 'Typescript', 'AWS', 'Apollo', 'Postgres']
  },
  {
    company: 'SingleOps',
    year: '2017-2019',
    position: 'Web Developer',
    description: 'As a full stack developer on our small team at SingleOps, I played a role in every step of our product improvement process. \
      This involved a nice mix of developing new features as well as improving existing ones. \
      I saw features through the entire lifecycle from gathering requirements, creating mockups, development, code review, QA, trainings, all the way to implementation with new clients.\
      Additionally, I worked directly with our clients to build custom reports with MySQL. \
      Many of these clients are self-taught entrepreneurs and I have quickly learned that they measure their success in a wide variety of ways.\
      These reports help them analyze their performace to improve efficiency and inform their business decisions. \
      This required me to develop a process for estimating, managing, and organizing these requests, \
      as well as an internal guide for SQL best practices. \
      ',
    skills: ['Ruby on Rails', 'Ruby', 'MySQL', 'AWS', 'Bootstrap', 'jQuery', 'SASS', 'Git', 'CoffeeScript']
  },
  {
    company: 'California State University at Monterey Bay',
    year: '2013-2016',
    position: 'Instructor',
    description: 'I developed the curriculum for and taught general science illustration, digital illustration, and zoological illustration to graduate students.',
    skills: ['Adobe Creative Suite', 'Photoshop', 'Illustrator']
  },
  {
    company: 'University of California, Santa Cruz',
    year: '2014-2016',
    position: 'Visiting Instructor',
    description: 'I developed the curriculum for and taught an undergraduate level general science illustration course.',
    skills: []
  }
]

const resumeItems = resumeList.map((resumeItem, i) => <ResumeItem key={i} {...resumeItem} />)

const educationList = [
  {
    school: 'Turing School of Software and Design',
    year: '2016-2017',
    description: 'Back-end web development',
    skills: ['Ruby on Rails', 'HTML', 'CSS', 'Javascript', 'React', 'jQuery']
  },
  {
    school: 'California State University at Monterey Bay',
    year: '2011-2012',
    description: 'Science Illustration Masters Certificate',
    skills: ['Photoshop', 'Illustrator', 'InDesign']
  },
  {
    school: 'Bucknell University',
    year: '2004-2008',
    description: 'B.A. Physics',
    skills: []
  }
]

const educationItems = educationList.map((educationItem, i) => <EducationItem key={i} {...educationItem} />)

const Resume = () => (
  <section>
    <GradientText>Lucy Conklin</GradientText>
    <ContactSection className="contact-section">
      <a href="https://github.com/lucyconklin" target="blank">
        <ContactHeader>
          <StyledIcon icon={ faGithub } /> 
          Github 
        </ContactHeader>
      </a>
      
      <a href="https://www.linkedin.com/in/lucy-conklin/" target="blank">
        <ContactHeader>
          <StyledIcon icon={ faLinkedin } /> 
          LinkedIn 
        </ContactHeader>
      </a>
      
      <a href="mailto:lucy.conklin@gmail.com" target="blank">
        <ContactHeader>
          <StyledIcon icon={ faEnvelope } /> 
          lucy.conklin@gmail.com 
        </ContactHeader>
      </a>
      
      <a href="tel:1-570-713-9582" target="blank">
        <ContactHeader>
          <StyledIcon icon={ faMobileAlt } /> 
          570.713.9582 
        </ContactHeader>
      </a>
    </ContactSection>
    <Header4>Projects</Header4>
    <div className="section-separator"></div>
    { projectItems }
    <Header4>Experience</Header4>
    <div className="section-separator"></div>
    { resumeItems }
    <Header4>Education</Header4>
    <div className="section-separator"></div>
    { educationItems }
    <Header4>Volunteer</Header4>
    <div className="section-separator"></div>
    { volunteerItems }
  </section>
)

export default Resume;