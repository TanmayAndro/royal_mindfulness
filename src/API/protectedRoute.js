// src/Components/ProtectedRoute.js
import React, { useEffect } from "react";
import { useAuthModal } from "../context/AuthModalContext";
import { useLocation } from "react-router-dom";

const ProtectedRoute = ({ element: Component, ...rest }) => {
  const userToken = localStorage.getItem("user_token");
  const { openAuthModal } = useAuthModal();
  const location = useLocation();

  useEffect(() => {
    if (!userToken) {
      const previousPath = document.referrer
        ? new URL(document.referrer).pathname
        : "/";

      openAuthModal(location.pathname, previousPath);
    }
  }, [userToken, location, openAuthModal]);

  if (!userToken) {
    return null;
  }

  return <Component {...rest} />;
};

export default ProtectedRoute;