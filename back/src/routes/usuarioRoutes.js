import { Router } from "express";

import { RegistraUsuario } from "../controllers/usuarios.controller.js";

const UsuarioRoute = Router();

UsuarioRoute.post("", RegistraUsuario);

export default UsuarioRoute;
