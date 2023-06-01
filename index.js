import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './ShowSubscriber';
import AddSubscriber from './AddSubscriber';
import reportWebVitals from './reportWebVitals';
import './common/common.css';
import ShowSubscriber from './ShowSubscriber';
import PhoneDirectory from './PhoneDirectory';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <PhoneDirectory />
  </React.StrictMode>
);
reportWebVitals();
