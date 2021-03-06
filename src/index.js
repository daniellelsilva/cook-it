import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { HashRouter } from 'react-router-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import RecipesProvider from './context/RecipesProvider';

import 'bootstrap-icons/font/bootstrap-icons.css';
import '@fortawesome/fontawesome-free/js/all';

ReactDOM.render(
  <HashRouter>
    <RecipesProvider>
      <App />
    </RecipesProvider>
  </HashRouter>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
