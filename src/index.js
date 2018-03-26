import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router } from "react-router-dom";
import App from './App/App';
import registerServiceWorker from './registerServiceWorker';
import WebFont from 'webfontloader';

WebFont.load({
  google: {
    families: ['Open+Sans:400,600,700', 'sans-serif']
  }
});

ReactDOM.render( 
  <Router>
    <App />
  </Router>, 
  document.getElementById('root')
);

registerServiceWorker();
