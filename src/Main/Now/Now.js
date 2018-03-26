import React, { Component } from 'react';
import Header1 from '../../Typography/Header1';
import Paragraph from '../../Typography/Paragraph';
import styled from 'styled-components';

const content = ""

class Now extends Component {
  render(
  ) 
  {
    return (
      <section>
        <Header1>Now!</Header1>
        <Paragraph> Currently, I'm in Augusta, GA working as a web developer for 
        <a href="https://singleops.com">SingleOps</a>
        . We work in Ruby on Rails, and dabble in React.</Paragraph>
      </section>
    );
  }
}

export default Now;