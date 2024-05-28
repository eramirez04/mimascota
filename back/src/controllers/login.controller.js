import jwt from "jsonwebtoken"
import usuarioModel from "../database/models/usuariosModel.js"

import { compare } from "../config/helpers/bycrypt.js"

const MillaveSecreta = "el_mejor_del_sena_123"


const Login = async (req, res) => {
    try {
        const { email, password } = req.body

        const usuarioLogin = await usuarioModel.find({
            email: email
        })

        if (usuarioLogin.length === 0) return res.status(400).json({ "mensaje": "correo es incorrecto" })

        let usuario = usuarioLogin[0]

        const checkContra = await compare(password, usuario.password)

        if (checkContra) {
            const token = jwt.sign({ usuario: usuario }, MillaveSecreta, { expiresIn: '24h' })

            return res.status(200).json({
                "Mensaje": "Usuario autorizado",
                token: token
            })
        }

        return res.status(200).json({ usuarioLogin })

    } catch (error) {
        return res.status(500).json({ mensaje: "error en el servidor", error })
    }
}

export default Login