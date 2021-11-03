import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import "./assets/styles/main.css"
import "react-toastify/dist/ReactToastify.css"
import Routes from "./components/Routes";
import {Provider} from "react-redux";
import {store} from "./redux/store";


ReactDOM.render(
  <Provider store={store}>
    <Routes/>
  </Provider>,
  document.getElementById('root')
);

