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

// cerrar sesion
export const Logout = ({ button }) => {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  if (!token) {
    return null;
  }

  return <button onClick={handleLogout}>{button}</button>;
};

import ErrorBoundary from "../helpers/ErrorRutas";

export const ProtectedRouteWithErrorBoundary = () => (
  <ErrorBoundary>
    <ProtectedRoute />
  </ErrorBoundary>
);
