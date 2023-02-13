import React from "react";
import { Navigate } from "react-router-dom";
import { useAuthGlobalContext } from "../../context/authContext/authContext";
import Loading from "../../components/Loading/Loading";

const ProtectedRoute = ({ children }) => {
  const { user, userLoading } = useAuthGlobalContext();
  if (userLoading) {
    return <Loading center={true} />;
  }
  if (!user) {
    return <Navigate to="/welcome" />;
  }

  return children;
};

export default ProtectedRoute;
