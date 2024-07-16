import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import store from './store';
import { RegistrationProvider } from './RegistrationContext';
import React from 'react';
import ReactDOM from 'react-dom/client';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RegistrationProvider>
        <App />
      </RegistrationProvider>
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
