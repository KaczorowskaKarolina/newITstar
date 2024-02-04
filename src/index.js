// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';  // Poprawny import BrowserRouter
import { Provider } from 'react-redux';
import store from '../src/redux/store.js';

import App from '../src/App.js';

import './index.scss';

const root = document.getElementById('root');

const reactRoot = ReactDOM.createRoot(root);
reactRoot.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);
