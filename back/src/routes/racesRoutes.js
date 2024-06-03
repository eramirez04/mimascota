import { Router } from "express";


// controlador
import { RegistraRaza, getRaza } from "../controllers/racesController.js";

import { isLogin } from "../middleware/loginMiddleware.js";

const RazaRouter = Router()

RazaRouter.post('', RegistraRaza)

RazaRouter.get('', isLogin, getRaza)

export default RazaRouter