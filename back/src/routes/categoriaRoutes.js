import { Router } from "express";

import { RegistrarCategoria, getCategoria } from "../controllers/categoriaController.js";

import { isLogin } from "../middleware/loginMiddleware.js";
const categoriaRouter = Router()

categoriaRouter.post('', RegistrarCategoria)
categoriaRouter.get('', isLogin, getCategoria)

export default categoriaRouter