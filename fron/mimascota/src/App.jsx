import { lazy } from "react";
import { Route, Routes } from "react-router-dom";

// pages
const Login = lazy(() => import("./pages/Login"));
const Home = lazy(() => import("./pages/Home"));

// componenetes
import AddMascota from "./pages/AddMascota";
import DetalleMascota from "./pages/components/DetalleMascota";

// proteger rutas
import { ProtectedRoute } from "./routes/rutasProtegidas";


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route element={<ProtectedRoute />}>
          <Route path="/home" element={<Home />} />
          <Route path="/añadir" element={<AddMascota />} />
        </Route>
        <Route path="/detalle/:id" element={<DetalleMascota />} />
        <Route path="/editar/:id" element={<DetalleMascota />} />

      </Routes>
    </>
  );
}

export default App;
