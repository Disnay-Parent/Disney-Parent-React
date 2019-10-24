import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import './index.css';
import App from './App';
// import {parent, volunteer} from './components/DataTest';

// wrapped the browser Router around the app for the react-app manipulation

ReactDOM.render(<BrowserRouter><App /></BrowserRouter>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA