import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import { InfoProvider } from './context/InfoContext';
import App from './App';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <InfoProvider>
      <Router>
        <App />
      </Router>
    </InfoProvider>
  </React.StrictMode>
);

