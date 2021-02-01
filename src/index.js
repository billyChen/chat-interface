import React from 'react';
import { Provider } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'
import ReactDOM from 'react-dom';
import App from './App';

import rootReducer from './store/reducers'

const store = configureStore({
  reducer: rootReducer
})

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
