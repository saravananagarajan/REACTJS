import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';



const inner = [
  React.createElement("h1", {}, "My First React Code"),
  React.createElement("h1", {}, "My Second React Code")
];

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  // React.createElement("div", null, inner),
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
