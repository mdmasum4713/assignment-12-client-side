import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  RouterProvider,
} from "react-router-dom";
import { router } from './Routes/Routes.jsx';
import { HelmetProvider } from 'react-helmet-async';
import AuthProvider from './providers/AuthProvider.jsx';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
 <HelmetProvider>
 <AuthProvider>
 <div className='shadow-lg container px-2 mx-auto'>
    <RouterProvider router={router} />
    </div>
 </AuthProvider>
 </HelmetProvider>
  </React.StrictMode>,
)
