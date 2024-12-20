import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const user = JSON.parse(localStorage.getItem('user'));
  if (!user || !user.name || !user.email || !user.user_id) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default ProtectedRoute;
