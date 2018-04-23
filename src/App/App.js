import React, { Component } from 'react';
import './App.css';
import styled from 'styled-components';
import Helmet from 'react-helmet';

import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';

const Site = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  min-height: 100vh;
`

class App extends Component {
  render() {
    return (
      <Site>
        <Helmet
          title="Lucy Conklin Dot Tech"
          meta={[
            { name: 'description', content: 'Lucy Conklin\'s personal website, portfolio, blog, and so on ...' },
            { name: 'keywords', content: 'resume, blog, portfolio, code, lucy conklin' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1'}
          ]}
        />
        <Header />
        <Main />
        <Footer />
      </Site>
    )
  }
}

export default App;
