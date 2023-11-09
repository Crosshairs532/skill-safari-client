import React from 'react'
import ReactDOM from 'react-dom/client'
import router from './Router/Router'
import { RouterProvider } from 'react-router-dom'
import './index.css'
import AuthProvider from './AuthProvider/AuthProvider'
import { HelmetProvider } from 'react-helmet-async';
// import toast, { Toaster } from 'react-hot-toast';
ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>
    <HelmetProvider>
      <AuthProvider>
        <RouterProvider router={router}></RouterProvider>
      </AuthProvider>
    </HelmetProvider>

    {/* <Toaster /> */}
  </React.StrictMode>,
)
