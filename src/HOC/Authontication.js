import Cookies from 'js-cookie';
import React from 'react';
import {Navigate, useNavigate} from 'react-router-dom';

const Auth = WrapperComponent => props => {
  const navigate = useNavigate();

  const token = Cookies.get('token');

  if (token) return <WrapperComponent {...props} />;
  return <Navigate to="/login" />;
};

export default Auth;
