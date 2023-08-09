import React from 'react'
import {createBrowserRouter} from 'react-router-dom'
import App from '../App'
import RootError from '../components/error/RootError'

const routes = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <RootError />,
  },
])

export default routes
