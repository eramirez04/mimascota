import categoriasModel from "../database/models/categoriaModel.js";


export const RegistrarCategoria = async (req, res) => {
    try {
        const { nombreCategoria } = req.body

        const objCategoria = new categoriasModel({
            name: nombreCategoria
        })

        const save = await objCategoria.save()

        return res.status(201).json({ raza: save })

    } catch (error) {
        return res.status(500).json({ mensaje: "error en el servidor", error })
    }
}