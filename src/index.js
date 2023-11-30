import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { ChooseClothesProvider } from './context/useChooseContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <ChooseClothesProvider>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </ChooseClothesProvider>

  </BrowserRouter>
  
);


