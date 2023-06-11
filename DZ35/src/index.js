import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import MyComponent from './MyComponent';
import { Provider } from 'react-redux';
import store from './store/store';
import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <MyComponent />
  </Provider>
);

