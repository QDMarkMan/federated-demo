import React from 'react';
import ReactDOM from 'react-dom';

import SayHelloFromB from 'application_b/SayHelloFromB';
import Demo from './parts/Demo'

import App from './app';

ReactDOM.render(
  <>
    <App />
    <SayHelloFromB />
    <Demo />
  </>,
  document.getElementById('root')
);
