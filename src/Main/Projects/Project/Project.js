import React, { Component } from 'react';
import styled from 'styled-components';

const Container = styled.section`
  height: 100px;
  width: 200px;
  background: #eee;
  padding: 10px;
`;

class Project extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <Container>
        <div>title: { this.props.title }</div>
        <div>path: { this.props.imagePath }</div>
        <p>{ this.props.description }</p>
      </Container>
    );
  }
}

export default Project;