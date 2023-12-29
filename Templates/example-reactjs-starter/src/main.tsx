import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import RootLayout from './App.tsx';
import './index.css';
import { AuthContextProvider } from './context/auth-context-provider.tsx';
import ErrorPage from './error-page.tsx';

const API_KEY: string = import.meta.env.VITE_API_KEY;
const API_SECRET: string = import.meta.env.VITE_API_SECRET;
const ORG_ID: string = import.meta.env.VITE_ORG_ID;

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AuthContextProvider apiKey={API_KEY} apiSecret={API_SECRET} orgId={ORG_ID}>
      <RouterProvider router={router} />
    </AuthContextProvider>
  </React.StrictMode>
);
