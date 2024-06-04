import MascotaModel from "../database/models/mascotasModel.js";

export const registrarMascota = async (req, res) => {
    try {
        const { name, race_id, categoria_id, genero_id } = req.body
        const foto = req.file.originalname

        const newMascota = await MascotaModel({
            name,
            race_id,
            categoria_id,
            genero_id,
            foto: foto
        })
        const save = await newMascota.save()

        return res.status(200).json(save)

    } catch (error) {
        return res.status(500).json({ mensaje: "error en el servidor" + error })
    }
}


export const getMascotas = async (req, res) => {
    try {
        const mascotas = await MascotaModel.find({}, 'name race_id foto')
            .populate('race_id', 'name _id')
            .exec();

        /*  const mascotas = await MascotaModel.find({}).populate('race_id', 'name') */

        if (mascotas.length === 0) return res.status(404).json({ mensaje: "no encontraron mascotas en la base de datos" })

        return res.status(200).json(mascotas)
    } catch (error) {
        return res.status(500).json({ mensaje: "error en el servidor" + error })
    }
}


export const getMascotasId = async (req, res) => {
    try {
        /*  const mascotas = await MascotaModel.aggregate([
             {
                 $lookup: {
                     from: "races",
                     localField: "race_id",
                     foreignField: "_id",
                     as: "razas"
                 }
             }
         ]) */

        const idMascota = req.params.id // 665b97087e1e549b4bb85c32

        const mascotas = await MascotaModel.findById(idMascota, 'name race_id foto')
            .populate('race_id', 'name')
            .populate('categoria_id', 'name')
            .populate('genero_id', 'name')
            .exec();

        if (mascotas.length === 0) return res.status(404).json({ mensaje: "no encontraron mascotas" })

        const mascota = {
            id: mascotas._id,
            nombre: mascotas.name,
            raza: mascotas.race_id.name,
            categoria: mascotas.categoria_id.name,
            genero: mascotas.genero_id.name,
            foto: mascotas.foto
        }

        return res.status(200).json({ mascota: mascota })
    } catch (error) {
        return res.status(500).json({ mensaje: "error en el servidor" + error })
    }
}

export const eliminarMascota = async (req, res) => {
    try {
        const id = req.params.id
        const response = await MascotaModel.deleteOne({ _id: id })

        if (response.deletedCount === 0) return res.status(404).json({ mensaje: "No se encontro mascota para eliminar" })

        res.status(200).json({ mensaje: "mascota eliminada" })

    } catch (error) {
        return res.status(500).json({ mensaje: "error en el servidor" + error })
    }
}

export const actualizarMascota = async (req, res) => {
    try {
        console.log(req.body)
        const { nombre, raza, categoria, genero } = req.body
        const id = req.params.id

        // const foto = req.file.originalname
        /*  console.log(req.body) */
        console.log(nombre, raza, categoria, genero)

        const response = await MascotaModel.findOneAndUpdate(
            { _id: id },
            {
                $set: {
                    name: nombre,
                    race_id: raza,
                    categoria_id: categoria,
                    genero_id: genero
                }
            },
            { new: true }
        )

        if (response) return res.status(200).json({ mensaje: "mascota actualizada" })

    } catch (error) {
        return res.status(500).json({ mensaje: "error en el servidor" + error })
    }
}