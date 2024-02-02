// src/index.js

import React from 'react';
// import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import store from '../src/redux/store.js';

import App from '../src/App.js';

import './index.scss';

const root = document.getElementById('root');

// Użyj createRoot zamiast ReactDOM.createRoot
const reactRoot = createRoot(root);
reactRoot.render(
  <Provider store={store}>
    <App />
  </Provider>
);
