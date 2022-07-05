import React from 'react';
import App from './App';
import './App.css';
import { createRoot } from 'react-dom/client';
//import { Provider } from 'react-redux';
//import { store } from './app/store';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
     
      <App />
    
  </React.StrictMode>
);

