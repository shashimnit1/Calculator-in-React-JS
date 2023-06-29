import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Titlebar from './Titlebar.jsx';
ReactDOM.render(
  <>
    <Titlebar
      title="Calculator in React-JS"
    />
    <App/>
  </>


  ,document.getElementById("root")
);