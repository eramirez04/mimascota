import mongoose from "mongoose";
const serveMongo = '127.0.0.1:27017'
const database = 'mimascota'


class Database {
    constructor() {
        this._conecct()
    }

    _conecct() {
        mongoose.connect(`mongodb://${serveMongo}/${database}`)
            .then(() => {
                console.log('conectado a la base de datos de las mascotas')
            }).catch(err => {
                console.error('Database connection error')
            })
    }
}

export default Database

