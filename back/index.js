import express from "express"
import bodyParser from "body-parser"
import cors from 'cors'

// conexion a la base de datos
import Database from "./src/database/conexion/database.js"

//rutas 
import UsuarioRoute from "./src/routes/usuarioRoutes.js"
import LoginRouter from "./src/routes/loginRoutes.js"
import categoriaRouter from "./src/routes/categoriaRoutes.js"
import RazaRouter from "./src/routes/racesRoutes.js"
import GeneroRouter from "./src/routes/gendersRouter.js"

const app = express()
const port = 3000

app.use(cors())


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))


new Database()


app.get('/', (req, res) => res.send('Hello World!'))

app.use('/usuario', UsuarioRoute)
app.use(LoginRouter)
app.use('/raza', RazaRouter)
app.use('/categoria', categoriaRouter)
app.use('/genero', GeneroRouter)


app.listen(port, () => console.log(`ejecutando en puerto http://localhost:${port}`))