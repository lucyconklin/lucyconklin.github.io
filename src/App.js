import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import styled from 'styled-components';

const Button = styled.button`
  background: ${props => props.primary ? 'palevioletred' : 'white'};
  color: ${props => props.primary ? 'white' : 'palevioletred'};
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;

const buttonText = "I'm a button"

const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
`;

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

class App extends Component {
  
  render(
  ) 
  {
    return (
      <div className="App">
        <Wrapper>
          <Title>Lucy Conklin's Github Pages Sandbox</ Title>
          <Button>{ buttonText }</ Button>
          <Button primary>Primary</ Button>
        </ Wrapper>
      </div>
    );
  }
}

export default App;
