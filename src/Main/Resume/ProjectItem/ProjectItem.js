import React, { Component } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
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
  margin-left: 10px;
`;

const StyledIcon = styled(FontAwesomeIcon)`
  color: orchid;
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
    
    if (this.props.link) {
      link = <a href={this.props.link} target="blank">
        <StyledIcon icon={ faGlobe } />
      </a>
    }
    
    return (
      <Item>
        <Header>{ this.props.name }</Header><Date>{ this.props.year }</Date>
        <p>{ this.props.description }</p>
        <Skills skills={ this.props.skills }/>
        { link }
      </Item>
    )
  }
};

export default ProjectItem;