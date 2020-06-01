import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import InputForm from './InputForm';

ReactDOM.render(
  <React.StrictMode>
    <App />
    <InputForm saveTodo={console.warn} />
  </React.StrictMode>,
  document.getElementById('root')
);
