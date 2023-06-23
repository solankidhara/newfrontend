import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Provider } from 'react-redux'
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import "primereact/resources/themes/lara-light-indigo/theme.css";  //theme
import "primereact/resources/primereact.min.css";                  //core css
import "primeicons/primeicons.css";           
import store from './Redux/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
      <Provider store={store}>
            <BrowserRouter>
                  <App />
            </BrowserRouter>
      </Provider>
);
