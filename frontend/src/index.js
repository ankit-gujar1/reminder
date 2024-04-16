import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import { AuthContextProvider } from './context/AuthContext';
import Signup from '../src/components/Signup'
import Login from './components/Login';
import { AddTask } from './components/AddTask';
import About from './components/About';
import Contact from './components/Contact';
import { EditTask } from './components/EditTask';
import { DeleteTask } from './components/DeleteTask';
import HighPriority from './components/HighPriorityTask';
import Home from './components/admin/Home';

const root = ReactDOM.createRoot(document.getElementById('root'));

const router=createBrowserRouter([
  {path:'/signup',element:<Signup/>},
  {path:'/',element:<App/>},
  {path:'/login',element:<Login/>},
  {path:'/add',element:<AddTask/>},
  {path:'/about',element:<About/>},
  {path:'/contact',element:<Contact/>},
  {path:'/edit/:id',element:<EditTask/>},
  {path:'/delete/:id',element:<DeleteTask/>},
  {path:'/highpriority',element:<HighPriority/>},

  //admin
  {path:'/admin/home',element:<Home/>}
])
root.render(
  <React.StrictMode>
    <AuthContextProvider>
      <RouterProvider router={router} />
    </AuthContextProvider>
  </React.StrictMode>
);

