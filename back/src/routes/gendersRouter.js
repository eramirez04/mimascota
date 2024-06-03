import { Router } from "express";

import { RegistrarGenero, getGenero } from "../controllers/gendersController.js";

import { isLogin } from "../middleware/loginMiddleware.js";

const GeneroRouter = Router()

GeneroRouter.post('', RegistrarGenero)
GeneroRouter.get('', isLogin, getGenero)

export default GeneroRouter