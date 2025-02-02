import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import ContextProvider from './context/AppContext.jsx';

createRoot(document.getElementById('root')).render(
    // 2. providing the context
  <ContextProvider>
    <App />
  </ContextProvider>
);
