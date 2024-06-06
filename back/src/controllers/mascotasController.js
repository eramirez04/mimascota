import MascotaModel from "../database/models/mascotasModel.js";

export const registrarMascota = async (req, res) => {
  try {
    const { name, race_id, categoria_id, genero_id } = req.body;
    const foto = req.file.originalname;

    const newMascota = await MascotaModel({
      name,
      race_id,
      categoria_id,
      genero_id,
      foto: foto,
    });
    const save = await newMascota.save();

    return res.status(200).json(save);
  } catch (error) {
    return res.status(500).json({ mensaje: "error en el servidor" + error });
  }
};

export const getMascotas = async (req, res) => {
  try {
    const mascotas = await MascotaModel.find({}, "name race_id foto")
      .populate("race_id", "name _id")
      .exec();
    // si el array que se obtiene, la longitud es 0 retorana  mensaje: "no encontraron mascotas en la base de datos"
    if (mascotas.length === 0)
      return res
        .status(404)
        .json({ mensaje: "no encontraron mascotas en la base de datos" });

    return res.status(200).json(mascotas);
  } catch (error) {
    return res.status(500).json({ mensaje: "error en el servidor" + error });
  }
};

export const getMascotasId = async (req, res) => {
  try {
    const idMascota = req.params.id; // id que llega por la url
    // consulta para poder obtner las raza, el genero y categoria de la mascota
    const mascotas = await MascotaModel.findById(idMascota, "name race_id foto")
      .populate("race_id", "name")
      .populate("categoria_id", "name")
      .populate("genero_id", "name")
      .exec();

    if (mascotas.length === 0)
      return res.status(404).json({ mensaje: "no encontraron mascotas" });

    const mascota = {
      id: mascotas._id,
      nombre: mascotas.name,
      raza: mascotas.race_id.name,
      categoria: mascotas.categoria_id.name,
      genero: mascotas.genero_id.name,
      foto: mascotas.foto,
    };

    return res.status(200).json({ mascota: mascota });
  } catch (error) {
    return res.status(500).json({ mensaje: "error en el servidor" + error });
  }
};

// funcion para poder eliminar una mascata mediante su id asiganado en la base de datos
export const eliminarMascota = async (req, res) => {
  try {
    const id = req.params.id;
    const response = await MascotaModel.deleteOne({ _id: id });

    if (response.deletedCount === 0)
      return res
        .status(404)
        .json({ mensaje: "No se encontro mascota para eliminar" });

    res.status(200).json({ mensaje: "mascota eliminada" });
  } catch (error) {
    return res.status(500).json({ mensaje: "error en el servidor" + error });
  }
};

//funcion qeu permite actualizar el registro de una mascota
export const actualizarMascota = async (req, res) => {
  try {
    console.log(req.body);
    const { nombre, raza, categoria, genero } = req.body;
    const id = req.params.id;

    //poder obtener la imagen que llega del front
    const img = req.file.originalname;

    const response = await MascotaModel.findOneAndUpdate(
      { _id: id },
      {
        $set: {
          name: nombre,
          race_id: raza,
          categoria_id: categoria,
          genero_id: genero,
          foto: img,
        },
      },
      { new: true }
    );

    if (response)
      return res.status(200).json({ mensaje: "mascota actualizada" });
  } catch (error) {
    return res.status(500).json({ mensaje: "error en el servidor" + error });
  }
};
