import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home/Home';
import About from './About/About';
import Projects from './Projects/Projects';
import Contact from './Contact/Contact';
import Now from './Now/Now';
import NoMatch from './NoMatch/NoMatch';

class Main extends Component {
  render() {
    return (
      <main>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/about' component={About}/>
          <Route path='/projects' component={Projects}/>
          <Route path='/contact' component={Contact}/>
          <Route path='/now' component={Now}/>
          <Route component={NoMatch}/>
        </Switch>
      </main>
    );
  }
}

export default Main;