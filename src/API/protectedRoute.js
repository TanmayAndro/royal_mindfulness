// src/Components/ProtectedRoute.js
import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ element: Component, ...rest }) => {
  const userToken = localStorage.getItem('user_token');
  window.scrollTo(0,0)
  return userToken ? <Component {...rest} /> : <Navigate to="/login" />;
};

export default ProtectedRoute;
