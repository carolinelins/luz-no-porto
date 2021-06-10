import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
import { FiltrosProvider } from './components/components pages/relatorio/providers/filtros'

ReactDOM.render(
  <React.StrictMode>
    <FiltrosProvider>
      <App />
    </FiltrosProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

