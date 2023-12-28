import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { AuthContextProvider } from './context/auth-context-provider.tsx';

const API_KEY: string = import.meta.env.VITE_API_KEY;
const API_SECRET: string = import.meta.env.VITE_API_SECRET;
const ORG_ID: string = import.meta.env.VITE_ORG_ID;

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AuthContextProvider apiKey={API_KEY} apiSecret={API_SECRET} orgId={ORG_ID}>
      <App />
    </AuthContextProvider>
  </React.StrictMode>
);
