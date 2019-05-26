import React from 'react';
import styled from 'styled-components';
import Header1 from '../../typography/Header1';
import GradientText from '../../typography/GradientText';
import ProjectItem from './ProjectItem/ProjectItem'
import ResumeItem from './ResumeItem/ResumeItem';
import EducationItem from './EducationItem/EducationItem';

const projectList = [
  {
    name: 'International Space Station Tracker',
    link: '#',
    description: 'This was a personal project at the Turing School. I was selected as a finalist for the Employer Demo Night.',
    skills: ['Building and Using APIs', 'D3','rSpec'],
    year: '2017'
  },
  {    
    name: 'This site',
    link: '#',
    description: 'I wanted to further my React skills, so I started with the create-react-app and added on additional tools one at a time.',
    skills: ['React', 'Styled Components', 'React Router'],
    year: '2018-current'
  },
  {    
    name: 'My Illustration Portfolio',
    link: '#',
    description: 'This has been my longest running project. I started coding with the intention of building myself a place to showcase my artwork and the rest is history.',
    skills: ['HTML', 'CSS', 'Bootstrap'],
    year: '2010-current'
  },
  {
    name: 'Code Apprentice',
    link: '#',
    description: 'I volunteer a few hours a week with a high school student learning coding skills. We work through paired coding challenges, and projects.',
    skills: ['Volunteer', 'HTML', 'CSS', 'Javascript'],
    year: '2019-current'
  }
]

const projectItems = projectList.map((projectItem, i) => <ProjectItem key={i} {...projectItem} />)

const resumeList = [
  {
    company: 'SingleOps',
    year: '2017-current',
    position: 'Web Developer',
    description: 'Full-stack developer ',
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
    <Header1>Projects</Header1>
    { projectItems }
    <Header1>Experience</Header1>
    { resumeItems }
    <Header1>Education</Header1>
    { educationItems }
  </section>
)

export default Resume;