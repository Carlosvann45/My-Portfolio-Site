import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/App';
import './index.css';

/**
 * Render App
 */
ReactDOM.createRoot(
  document.getElementById('root')
).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
