import { Router } from "express";

// controlador
import { RegistraRaza, getRaza } from "../controllers/racesController.js";

// verificar token que llega por la cabecera
// para poder acceder a los endpoints
import { isLogin } from "../middleware/loginMiddleware.js";

const RazaRouter = Router();

RazaRouter.post("", RegistraRaza);

RazaRouter.get("", isLogin, getRaza);

export default RazaRouter;
