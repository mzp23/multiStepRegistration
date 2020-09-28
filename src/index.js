import React from 'react';
import ReactDOM from 'react-dom';
import store from './app/store';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
import "rsuite/dist/styles/rsuite-default.min.css";

import App from './app/App';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
`;

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <GlobalStyle />
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
