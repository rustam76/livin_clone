import { Navigate } from "react-router-dom";

function ProtectedRoute({ element }:any) {
  const userData = localStorage.getItem('namelogin');

  if (!userData) {
    return <Navigate to="/" replace />;
  }

  return element;
}

export default ProtectedRoute;
