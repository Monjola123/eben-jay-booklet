
import React from 'react';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import { createRoot } from 'react-dom/client';
import notebookReducer from './redux/reducers';
import App from './App';

const store = configureStore({
  reducer: {
    notebook: notebookReducer,
  },
});

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
