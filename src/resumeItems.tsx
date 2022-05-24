type ResumeSection = "work" | "projects" | "education";

export type ResumeItem = {
  title: string;
  subtitle?: string;
  detail?: string;
  years: string;
  skills?: string[];
  section: ResumeSection;
  repo?: string;
  link?: string;
}

const education: ResumeItem[] = [
  {
    title: 'Turing School of Software and Design',
    years: '2016-2017',
    subtitle: 'Back-end Web Development',
    skills: ['Ruby on Rails', 'HTML', 'CSS', 'Javascript', 'React'],
    section: "education"
  },
  {
    title: 'California State University at Monterey Bay',
    years: '2011-2012',
    subtitle: 'Science Illustration Masters Certificate',
    skills: ['Photoshop', 'Illustrator', 'InDesign'],
    section: "education"
  },
  {
    title: 'Bucknell University',
    years: '2004-2008',
    subtitle: 'B.A. Physics',
    skills: [],
    section: "education"
  },
]

const work: ResumeItem[] = [
  {
    title: 'Homebound',
    years: '2019-current',
    subtitle: 'Senior Software Engineer',
    detail: 'As a full stack engineer I design new features, improve existing features \
      and help unblock other teams so we can deliver on the promise of technology. I recently \
      rewrote our Salesforce integration which is the primary driver of project creation, and required \
      close coordination with the sales teams. \
      I contribute to our open source projects, host a bi-weekly frontend guild meeting to facilitate \
      cross team coordination for frontend development, and help onboard new engineers. \
      ',
    skills: ['GraphQL', 'Typescript', 'AWS', 'Apollo', 'Postgres', 'React'],
    section: "work",
  },
  {
    title: 'SingleOps',
    years: '2017-2019',
    subtitle: 'Web Developer',
    detail: 'As a full stack developer on our small team at SingleOps, I played a role in every step of our product improvement process. \
      This involved a nice mix of developing new features as well as improving existing ones. \
      I saw features through the entire lifecycle from gathering requirements, creating mockups, development, code review, QA, trainings, all the way to implementation with new clients.\
      Additionally, I worked directly with our clients to build custom reports with MySQL. \
      Many of these clients are self-taught entrepreneurs and I have quickly learned that they measure their success in a wide variety of ways.\
      These reports help them analyze their performance to improve efficiency and inform their business decisions. \
      This required me to develop a process for estimating, managing, and organizing these requests, \
      as well as an internal guide for SQL best practices. \
      ',
    skills: ['Ruby on Rails', 'MySQL', 'AWS', 'Bootstrap', 'jQuery', 'SASS', 'Git', 'CoffeeScript'],
    section: "work",
  },
  {
    title: 'California State University at Monterey Bay',
    years: '2013-2016',
    subtitle: 'Instructor',
    detail: 'I developed the curriculum for and taught general science illustration, digital illustration, and zoological illustration to graduate students.',
    skills: ['Adobe Creative Suite', 'Photoshop', 'Illustrator'],
    section: 'work'
  }
]

// These projects are a bit out of date, so don't use them right now
const projects: ResumeItem[] = [
  {    
    title: 'This site',
    link: '#',
    repo: 'https://github.com/lucyconklin/lucyconklin.github.io',
    detail: 'To further my React skills, I started with the create-react app and added additional tools one at a time. \
      I initiated my work with React Router and added styled components.',
    skills: ['React', 'Styled Components', 'React Router'],
    years: '2018-current',
    section: "projects"
  },
  {
    title: 'International Space Station Tracker',
    link: 'https://international-space-station.herokuapp.com/',
    repo: 'https://github.com/lucyconklin/international_space_station',
    detail: 'My app displays the position of the International Space Station and where people are in space, right now. \
      This project was started while at the Turing School and was a selected finalist for the Employer Demo Night.',
    skills: ['Building and Consuming APIs', 'D3.js','RSpec','Ruby on Rails', 'Heroku'],
    years: '2017',
    section: "projects"
  },
  {    
    title: 'My Illustration Portfolio',
    link: 'https://www.lucyconklin.com',
    repo: '',
    detail: 'In 2010 I started my longest running and my personal pet project. \
      I took HTML/CSS classes to start coding work in order to create a site to showcase my artwork. \
      I have been continuously improving it ever since.',
    skills: ['HTML', 'CSS', 'Bootstrap'],
    years: '2010-current',
    section: "projects"
  }
]

export const resumeList: ResumeItem[] = [...work, ...education];
