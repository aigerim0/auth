import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import "./assets/styles/main.css"
import "react-toastify/dist/ReactToastify.css"
import Routes from "./components/Routes";


ReactDOM.render(
  <React.StrictMode>
    <Routes/>
  </React.StrictMode>,
  document.getElementById('root')
);

