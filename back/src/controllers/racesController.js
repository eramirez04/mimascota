import racesModel from "../database/models/racesModel.js";



export const RegistraRaza = async (req, res) => {
    try {

        const { nombreRaza } = req.body

        const ObjRaza = new racesModel({
            name: nombreRaza
        })

        const save = await ObjRaza.save()

        return res.status(201).json({ raza: save })



    } catch (error) {
        return res.status(500).json({ mensaje: "error en el servidor", error })
    }
}