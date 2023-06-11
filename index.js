import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import './common/common.css';
import PhoneDirectory from './PhoneDirectory';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <PhoneDirectory />
  </React.StrictMode>
);
reportWebVitals();
