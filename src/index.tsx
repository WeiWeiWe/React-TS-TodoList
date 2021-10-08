import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store/createStore';
import App from './App';
import reset from 'styled-reset';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  ${reset}
  * {
    font-family: "Lato", "微軟正黑體", sans-serif;
  }
  .global-block-fields {
    height: 50px;
  }
  ::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }
  ::-webkit-scrollbar-thumb {
    background: rgb(204, 204, 204);
    border-radius: 1em;
  }
  ::-webkit-scrollbar-track {
    background-color: rgb(238, 238, 238);
  }
`;

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
