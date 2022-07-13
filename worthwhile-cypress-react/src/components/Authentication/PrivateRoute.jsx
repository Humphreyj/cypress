import React, { useContext } from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { MainContext } from "../../context/Context";

const PrivateRoute = ({ auth }) => {
  const { isAuthenticated } = useContext(MainContext);
  const location = useLocation();
  if (!isAuthenticated) {
    return <Navigate to="login" state={{ from: location }} />;
  }
  return <Outlet />;
};

export default PrivateRoute;
