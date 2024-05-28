import gendersModel from "../database/models/gendersModel.js";

export const RegistrarGenero = async (req, res) => {
    try {

        const { nombreGenero } = req.body

        const ObjGenero = new gendersModel({
            name: nombreGenero
        })

        const save = await ObjGenero.save()

        return res.status(201).json({ genero: save })

    } catch (error) {
        return res.status(500).json({ mensaje: "error en el servidor", error })
    }
}