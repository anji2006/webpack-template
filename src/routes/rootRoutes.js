import React from 'react';
import {createBrowserRouter} from 'react-router-dom';
import App from '../App';
import RootError from '../components/error/RootError';
import Login from '../views/Login/Login';
import User from '../views/userPage/User';

const routes = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <RootError />,
    children: [
      {
        path: 'dashboard',
        element: <div> this is Dashboard</div>,
      },
      {
        path: 'contacts',
        element: <div> this is Contacts</div>,
      },
      {
        path: 'home',
        element: <div> this is Home</div>,
      },
      {
        path: 'users',
        element: <User />,
      },
      {
        path: 'details',
        element: <div> this is Details</div>,
      },
      {
        path: '*',
        element: <div> Page Not Found</div>,
      },
    ],
  },
  {
    path: '/login',
    element: <Login />,
  },
]);

export default routes;
