import { Router } from "express";

import { RegistrarCategoria } from "../controllers/categoriaController.js";

const categoriaRouter = Router()

categoriaRouter.post('/categoria', RegistrarCategoria)

export default categoriaRouter