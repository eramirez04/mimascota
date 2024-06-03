import mongoose from "mongoose";
/* const serveMongo = '127.0.0.1:27017'
const database = 'mimascota' */
/* const serveMongo = process.env.DB_HOST
const database = process.env.DB_DATABASE
 */
// manejar variables de entorno secretas
import dotenv from "dotenv"
dotenv.config({ path: 'env/.env' })


class Database {
    constructor() {
        this._conecct()
    }

    _conecct() {
        mongoose.connect(`mongodb://${process.env.DB_HOST}/${process.env.DB_DATABASE}`)
            .then(() => {
                console.log('conectado a la base de datos de las mascotas')
            }).catch(err => {
                console.error('Database connection error')
            })
    }
}

export default Database