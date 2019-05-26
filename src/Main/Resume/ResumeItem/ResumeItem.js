import React, { Component } from 'react';
import styled from 'styled-components';
import Header3 from '../../../typography/Header3';
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

class ResumeItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      active: true
    };
  }
  
  render() {
    return (
      <Item>
        <Header>{ this.props.company }</Header><Date>{ this.props.year }</Date>
        <h3>{ this.props.position }</h3>
        <p>{ this.props.description }</p>
        <Skills skills={ this.props.skills }/>
      </Item>
    )
  }
};

export default ResumeItem;