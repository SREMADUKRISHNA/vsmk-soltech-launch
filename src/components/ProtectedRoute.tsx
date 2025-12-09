import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoute = ({
  isAllowed,
  redirectPath = '/login',
  children,
}: {
  isAllowed: boolean;
  redirectPath?: string;
  children?: React.ReactElement;
}) => {
  if (!isAllowed) {
    return <Navigate to={redirectPath} replace />;
  }

  return children ? children : <Outlet />;
};

export default ProtectedRoute;
