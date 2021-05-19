import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Controlled from "./Controlled_components";
import Controlled_components_Multi_Inputs from "./Controlled_components_Multi_Inputs";
import ClassNaarFunction from "./ClassNaarFunction";
import ClassNaarFunction_Vertaald from "./ClassNaarFunction_Vertaald";



ReactDOM.render(
  <React.StrictMode>
    <Controlled_components_Multi_Inputs  />
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
