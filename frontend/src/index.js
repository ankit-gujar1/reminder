import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import { AuthContextProvider } from './context/AuthContext';
import Signup from '../src/components/Signup'
import Login from './components/Login';

const root = ReactDOM.createRoot(document.getElementById('root'));

const router=createBrowserRouter([
  {path:'/signup',element:<Signup/>},
  {path:'/',element:<App/>},
  {path:'/login',element:<Login/>}
])
root.render(
  <React.StrictMode>
    <AuthContextProvider>
      <RouterProvider router={router} />
    </AuthContextProvider>
  </React.StrictMode>
);

