import { lazy } from "react";
import { Route, Routes } from "react-router-dom";

// pages
const Login = lazy(() => import("./pages/Login"));
const Home = lazy(() => import("./pages/Home"));

// componenetes
import AddMascota from "./pages/AddMascota";
import DetalleMascota from "./pages/components/DetalleMascota";


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/añadir" element={<AddMascota />} />
        <Route path="/detalle" element={<DetalleMascota />} />
      </Routes>
    </>
  );
}

export default App;
