import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home/Home';
import About from './About/About';
import Projects from './Projects/Projects';
import Contact from './Contact/Contact';
import Now from './Now/Now';
import Resume from './Resume/Resume';
import NoMatch from './NoMatch/NoMatch';
import styled from 'styled-components';

const Container = styled.section`
  padding: 1em;
  width: 70%;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
  flex: 1;
  
  @media (max-width: 1000px) {
    width: 80%;
  
  @media (max-width: 700px) {
    width: 90%;
  }
`;

class Main extends Component {
  render() {
    return (
      <Container>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/about' component={About}/>
          <Route path='/projects' component={Projects}/>
          <Route path='/contact' component={Contact}/>
          <Route path='/now' component={Now}/>
          <Route path='/resume' component={Resume}/>
          <Route component={NoMatch}/>
        </Switch>
      </Container>
    );
  }
}

export default Main;