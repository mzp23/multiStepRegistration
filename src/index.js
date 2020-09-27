import React from 'react';
import ReactDOM from 'react-dom';
import store from './app/store';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';

import App from './app/App';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  button {
    margin: 0 10px;
    background-color: #fff;
    padding: 10px 15px;
    border: 1px solid #ccc;
    border-radius: 5px;
    cursor: pointer;
    outline: none;

    &:active {
      transform: translateY(2px)
    }
    &:disabled {
      cursor: not-allowed;
    }
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
