import React from "react";
import ReactDOM from "react-dom";
import App from './App';
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";
import './Assets/global.css'

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);
