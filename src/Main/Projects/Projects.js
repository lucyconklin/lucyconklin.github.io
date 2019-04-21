import React, { Component } from 'react';
import Project from './Project/Project';

const projects = [
  {
    title: "Project 1",
    imagePath: "",
    description: "description"
  },
  {
    title: "Project 2",
    imagePath: "",
    description: "description"
  }
]

const projectLinks = projects.map((project, i) => <Project key={i} {...project} />)

class Projects extends Component {
  render(
  ) 
  {
    return (
      <div>
        { projectLinks }
      </div>
    );
  }
}

export default Projects;