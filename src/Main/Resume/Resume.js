import React from 'react';
import './Resume.css';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faEnvelope, faMobileAlt, faLink } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import Header1 from '../../Typography/Header1';
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
  margin: 20px 0;
`

const projectList = [
  {    
    name: 'This site',
    link: '#',
    repo: 'https://github.com/lucyconklin/lucyconklin.github.io',
    description: 'I wanted to further my React skills, so I started with the create-react-app and added on additional tools one at a time. I started with React Router, and added styled components.',
    skills: ['React', 'Styled Components', 'React Router'],
    year: '2018-current'
  },
  {
    name: 'International Space Station Tracker',
    link: 'https://international-space-station.herokuapp.com/',
    repo: 'https://github.com/lucyconklin/international_space_station',
    description: 'There are people in space, right now. This app displays the position of the International Space Station. This was a personal project at the Turing School. I was selected as a finalist for the Employer Demo Night.',
    skills: ['Building and Consuming APIs', 'D3.js','RSpec'],
    year: '2017'
  },
  {    
    name: 'My Illustration Portfolio',
    link: 'https://www.lucyconklin.com',
    repo: '',
    description: 'This has been my longest running project. In 2010 I took a HTML/CSS class, and started coding this site shortly after with the intention of building myself a place to showcase my artwork. I\'ve been tinkering with it ever since.',
    skills: ['HTML', 'CSS', 'Bootstrap'],
    year: '2010-current'
  }
]

const projectItems = projectList.map((projectItem, i) => <ProjectItem key={i} {...projectItem} />)

const volunteerList = [
  {
    name: 'Code Apprentice',
    description: 'I volunteer a few hours a week with a high school student learning coding skills. We work through paired coding challenges, and projects.',
    skills: ['HTML', 'CSS', 'Javascript', 'jQuery'],
    year: '2019-current'
  },
  {
    name: 'Turing School of Software and Design Alumni Committee',
    description: 'We support Turing\'s mission through recruiting new students, assisting current students, helping recent graduates in their job searches, and by connecting alumni through volunteer and networking events.',
    skills: [],
    year: '2018-current'
  }
]

const volunteerItems = volunteerList.map((volunteerItem, i) => <ProjectItem key={i} {...volunteerItem} />)

const resumeList = [
  {
    company: 'SingleOps',
    year: '2017-current',
    position: 'Web Developer',
    description: 'Full-stack developer',
    skills: ['Ruby on Rails', 'Ruby', 'mySQL', 'AWS', 'Bootstrap', 'jQuery', 'SASS', 'Git']
  },
  {
    company: 'California State University at Monterey Bay',
    year: '2013-2016',
    position: 'Instructor',
    description: 'I developed the curriculum for and taught general science illustration, digital illustration, and zoological illustration to graduate students.',
    skills: []
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
    <Header1>Contact</Header1>
    <div className="section-separator"></div>
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
    <Header1>Projects</Header1>
    <div className="section-separator"></div>
    { projectItems }
    <Header1>Experience</Header1>
    <div className="section-separator"></div>
    { resumeItems }
    <Header1>Education</Header1>
    <div className="section-separator"></div>
    { educationItems }
    <Header1>Volunteer</Header1>
    <div className="section-separator"></div>
    { volunteerItems }
  </section>
)

export default Resume;