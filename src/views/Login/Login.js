import Cookies from 'js-cookie'
import React from 'react'
import {Navigate, useNavigate} from 'react-router-dom'

const Login = () => {
  const navigate = useNavigate()
  const token = Cookies.get('token')
  if (token) return <Navigate to="/" />

  const loginHandler = () => {
    Cookies.set('token', 'User Login to APP', {expires: 1})
    navigate('/')
  }

  return (
    <div>
      <div>This is login Page</div>
      <button type="button" onClick={loginHandler}>
        Login To App
      </button>
    </div>
  )
}

export default Login
