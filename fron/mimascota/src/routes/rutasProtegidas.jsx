import { Navigate, useNavigate, Outlet } from "react-router-dom";

export const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem("token");

  try {
    if (!token) {
      alert("permiso denegado");
      return <Navigate to={"/"} />;
    }
    return <Outlet />;
  } catch (error) {
    console.error(error);
  }

  console.log("Renderizando el Outlet"); // Declaración de depuración

  return <Outlet />;
};

// cerrar cesion
export const Logout = () => {
  localStorage.removeItem("token");
  return <Navigate to="/" />;
};

import ErrorBoundary from "../helpers/ErrorRutas";

export const ProtectedRouteWithErrorBoundary = () => (
  <ErrorBoundary>
    <ProtectedRoute />
  </ErrorBoundary>
);
