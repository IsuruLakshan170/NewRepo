
import './index.css';

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import store from './app/store';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
const DATA = [
  { id: "todo-0", name: "Eat yes"},
  { id: "todo-1", name: "Sleep"},
  { id: "todo-2", name: "Repeat"}
];

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App/>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);



serviceWorker.unregister();
