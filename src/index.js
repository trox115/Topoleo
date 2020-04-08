import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import SimpleReactLightbox from 'simple-react-lightbox';
import App from './App';
import './index.css';
import * as serviceWorker from './serviceWorker';

render(
  <Router>
    <SimpleReactLightbox>
      <App />
    </SimpleReactLightbox>
  </Router>,
  document.getElementById('root'),
);
serviceWorker.register();
