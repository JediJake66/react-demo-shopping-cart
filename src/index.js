import './components/styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import App from './App';
import CartContextProvider from './context/CartContext';
import React from 'react';
import ReactDOM from 'react-dom';

ReactDOM.render(
  <React.StrictMode>
    <CartContextProvider>
      <App />
    </CartContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);


