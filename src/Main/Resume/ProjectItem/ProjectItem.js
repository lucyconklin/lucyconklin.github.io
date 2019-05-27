import React, { Component } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe, faLink } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import Header3 from '../../../Typography/Header3';
import Skills from '../Skills/Skills';

const Item = styled.section`
  margin: 20px 0;
`;

const Header = styled.h3`
  display: inline-block;
  font-size: 20px;
  font-weight: bold;
`;

const Date = styled.h3`
  display: inline-block;
  color: #777;
  font-size: 16px;
  font-weight: bold;
  margin: 0 10px;
`;

const StyledIcon = styled(FontAwesomeIcon)`
  color: #7986CB;
  
  &:hover {
    color: #3F51B5;
  }
`;

class ProjectItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      active: true
    };
    
  }

  render() {
    let link;
    let repo;
    
    if (this.props.link) {
      link = <a href={this.props.link} target="blank">
        <StyledIcon icon={ faLink } />
      </a>
    }
    
    if (this.props.repo) {
      repo = <a href={ this.props.repo } target="blank">
        <StyledIcon icon={ faGithub } />
      </a>
    }
    
    return (
      <Item>
        <Header>{ this.props.name }</Header><Date>{ this.props.year }</Date>{ link } { repo }
        <p>{ this.props.description }</p>
        <Skills skills={ this.props.skills }/>
      </Item>
    )
  }
};

export default ProjectItem;