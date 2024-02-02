// createStore.js (zalecane użycie configureStore z @reduxjs/toolkit)
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducer.js';

const store = configureStore({
  reducer: rootReducer,
  // inne opcje konfiguracyjne...
});

export default store;
