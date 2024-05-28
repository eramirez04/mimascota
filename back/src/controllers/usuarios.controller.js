import usuarioModel from "../database/models/usuariosModel.js";


// funcion que guarda la contaseña encriptada
import { encriptarContra } from "../config/helpers/bycrypt.js";


export const RegistraUsuario = async (req, res) => {
    try {
        const { fullName, email, password } = req.body

        // criptacion de la contraseña
        const contraEncriptada = await encriptarContra(password)

        console.log(contraEncriptada)

        const usuario = new usuarioModel({
            fullName,
            email,
            password: contraEncriptada
        })

        const save = await usuario.save()

        return res.status(201).json({ usuario: save })


    } catch (error) {
        return res.status(500).json({ mensaje: "error en el servidor", error })
    }
}











/* 
class UsuarioController {



    async crearRegistroUsuario() {
        try {

        } catch (error) {
            console.error(error)
        }
    }
} */