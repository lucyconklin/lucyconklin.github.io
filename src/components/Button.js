import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StyledButton = styled.button`
  background: ${props => props.primary ? '#374c5f' : 'white'};
  color: ${props => props.primary ? 'white' : '#374c5f'};
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid #374c5f;
  &:hover {
    color: red;
  }
`;

const buttonText = "I'm a button"

class Button extends Component {
  constructor(props) {
    super(props);

    this.state = {
      active: true,
      text: this.props.text || buttonText
    };
  }
  
  render() {
    return (
      <StyledButton primary className="is-button">{ this.state.text }</StyledButton>
    );
  }
}

export default Button;

