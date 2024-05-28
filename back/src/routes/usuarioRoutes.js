import { Router } from "express";

import { RegistraUsuario } from "../controllers/usuarios.controller.js";

const UsuarioRoute = Router()

UsuarioRoute.post('/registrar', RegistraUsuario)


export default UsuarioRoute