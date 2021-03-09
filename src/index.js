import React from 'react';
import ReactDOM from 'react-dom';
import './Components/Pages/Index/index.css';
import App from './Components/Pages/App/App.js';
import { BrowserRouter as Router } from 'react-router-dom';

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
);