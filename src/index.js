import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Counter from './features/counter/Counter';
import { Provider } from 'react-redux';
import { store } from './app/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <Counter/>
  </Provider>
);
