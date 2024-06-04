import {check} from "express-validator"

export const validarImagen = [
    check('img', 'La imagen es requerida').not().isEmpty()
] 