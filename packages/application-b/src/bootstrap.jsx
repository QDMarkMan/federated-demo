import React from 'react';
import ReactDOM from 'react-dom';

import SayHelloFromA from 'application_a/SayHelloFromA';
import ButtonA from 'application_a/ButtonA'

import App from './app';

ReactDOM.render(
  <>
    <App />
    <SayHelloFromA />
    <ButtonA>Use In Application B</ButtonA>
  </>,
  document.getElementById('root')
);
