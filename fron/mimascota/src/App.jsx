import { lazy } from "react";
import { Route, Routes } from "react-router-dom";

// pages
const Login = lazy(() => import("./pages/Login"));
const Home = lazy(() => import("./pages/Home"));

// componenetes
import PageAddMascota from "./pages/PageAddMascota";
import ProfileMascota from "./pages/ProfileMascota";
import PageModificarMascota from "./pages/PageModificarMascota";
import CrearAdmin from "./pages/CrearAdmin";

// proteger rutas
import { ProtectedRouteWithErrorBoundary } from "./routes/rutasProtegidas";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/crearadmin" element={<CrearAdmin />} />
        <Route element={<ProtectedRouteWithErrorBoundary />}>
          <Route path="/home" element={<Home />} />
          <Route path="/añadir" element={<PageAddMascota />} />
          <Route path="/detalle/:id" element={<ProfileMascota />} />
          <Route path="/editar/:id" element={<PageModificarMascota />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
