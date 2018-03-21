import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import styled from 'styled-components';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Main from '../Main/Main';

const Button = styled.button`
  background: ${props => props.primary ? '#374c5f' : 'white'};
  color: ${props => props.primary ? 'white' : '#374c5f'};
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid #374c5f;
  border-radius: 3px;
`;

const buttonText = "I'm a button"

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Main />
        <Footer />
      </div>
    )
  }
}

export default App;
