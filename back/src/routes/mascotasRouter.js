import { Router } from "express";

// funciones de los controladores
import {
    registrarMascota,
    getMascotas,
    getMascotasId,
    eliminarMascota,
    actualizarMascota
} from "../controllers/mascotasController.js";

// verificar token que llega por la cabecera 
// para poder acceder a los endpoints
import { isLogin } from "../middleware/loginMiddleware.js";

// cargar imagen al servidor
import { cargarImagen } from "../config/helpers/cargarArchivos.js";

// iniciando rutas del servidor para registros
// de las mascotas
const mascotasRouter = Router()

mascotasRouter.post('', isLogin, cargarImagen, registrarMascota)

mascotasRouter.get('', isLogin, getMascotas)

mascotasRouter.get('/:id', isLogin, getMascotasId)

mascotasRouter.delete('/:id', isLogin, eliminarMascota)

mascotasRouter.put('/:id', isLogin, actualizarMascota)

export default mascotasRouter