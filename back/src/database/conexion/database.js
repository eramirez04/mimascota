import mongoose from "mongoose";

// manejar variables de entorno secretas
import dotenv from "dotenv"
dotenv.config({ path: 'env/.env' })


class Database {
    constructor() {
        this._conecct()//${process.env.DB_HOST}/${process.env.DB_DATABASE}k
    }

    _conecct() {
        mongoose.connect(`mongodb://emersson:emer123@localhost:27017/mimascota?authSource=admin`)
            .then(() => {
                console.log('conectado a la base de datos de las mascotas')
            }).catch(err => {
                console.error('Database connection error', err)
            })
    }
}

export default Database