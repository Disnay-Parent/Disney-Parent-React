import React from 'react';
import ReactDOM from 'react-dom';
<<<<<<< HEAD
import {BrowserRouter} from "react-router-dom";
import './index.css';
import App from './App';

// wrapped the browser Router around the app for the react-app manipulation

ReactDOM.render(<BrowserRouter><App /></BrowserRouter>, document.getElementById('root'));
=======
import {BrowserRouter as Router} from 'react-router-dom';
import './index.css'; 
import App from './App';

ReactDOM.render(
  <Router>
    <App />
  </Router>, 
  document.getElementById('root')
);
>>>>>>> 181655324b79d6f7d2a8c4ffa97f3f54e4dc2071

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA