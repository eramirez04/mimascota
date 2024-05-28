import { Router } from "express";


// controlador
import { RegistraRaza } from "../controllers/racesController.js";


const RazaRouter = Router()

RazaRouter.post('/registrar', RegistraRaza)


export default RazaRouter