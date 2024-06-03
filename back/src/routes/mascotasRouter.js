import { Router } from "express";

// funciones de los controladores
import {
    registrarMascota,
    getMascotas,
    getMascotasId,
    eliminarMascota
} from "../controllers/mascotasController.js";

// verificar token que llega por la cabecera
import { isLogin } from "../middleware/loginMiddleware.js";

// cargar imagen al servidor
import { cargarImagen } from "../config/helpers/cargarArchivos.js";

const mascotasRouter = Router()


mascotasRouter.post('', isLogin, cargarImagen, registrarMascota)

mascotasRouter.get('', isLogin, getMascotas)

mascotasRouter.get('/:id', isLogin, getMascotasId)


mascotasRouter.delete('/:id', isLogin, eliminarMascota)

export default mascotasRouter