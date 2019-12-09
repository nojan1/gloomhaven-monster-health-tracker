import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom'
import App from './App';
import { StateProvider } from './state';
import { getInitialState } from './state/initial';
import { mainReducer } from './reducer';

import { createGlobalStyle } from 'styled-components';
const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'pirata-one';
    src: url('PirataOne-Gloomhaven.ttf');
  }

  #root, body, html {
    margin: 0;
    padding: 0;
    height:100%;
    width:100%;
    overflow-x: hidden;
  }

  #root {
    background-image: url('images/background.jpg');
    background-repeat: no-repeat;
    background-size: cover;
  }
`;

ReactDOM.render(
  <StateProvider reducer={mainReducer} initialState={getInitialState()}>
    <GlobalStyle />
    <Router>
      <App />
    </Router>
  </StateProvider>
  , document.getElementById('root'));
