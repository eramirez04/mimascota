import { Router } from "express";

import { RegistrarGenero } from "../controllers/gendersController.js";


const GeneroRouter = Router()

GeneroRouter.post('/genero', RegistrarGenero)

export default GeneroRouter