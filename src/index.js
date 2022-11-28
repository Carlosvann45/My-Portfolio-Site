import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/app/App';
import LoadingSpinner from './components/loading-spinner/LoadingSpinner';

/**
 * Render App
 */
ReactDOM.render(
  <React.StrictMode>
    <App />
    <LoadingSpinner />
  </React.StrictMode>,
  document.getElementById('root')
);
