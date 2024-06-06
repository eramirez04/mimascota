import { Router } from "express";

// controlador
import Login from "../controllers/login.controller.js";

const LoginRouter = Router();

LoginRouter.post("/login", Login);

export default LoginRouter;
