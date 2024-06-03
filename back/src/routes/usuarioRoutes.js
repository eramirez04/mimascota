import { Router } from "express";

import { RegistraUsuario } from "../controllers/usuarios.controller.js";

import isLogin from "../controllers/login.controller.js"

const UsuarioRoute = Router()

UsuarioRoute.post('', isLogin, RegistraUsuario)


export default UsuarioRoute