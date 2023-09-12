import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './assets/createProductStyles.css';
// import './assets/createProductJs.js';

import CreateProduct from './pages/CreateProduct';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CreateProduct />
  </React.StrictMode>
)

