import Express from "express"
import bodyParser from "body-parser"
import cors from 'cors'

//importacion de la conexion a la base de datos
import Database from "./src/database/conexion/database.js"

//rutas 
import UsuarioRoute from "./src/routes/usuarioRoutes.js"
import LoginRouter from "./src/routes/loginRoutes.js"
import categoriaRouter from "./src/routes/categoriaRoutes.js"
import RazaRouter from "./src/routes/racesRoutes.js"
import GeneroRouter from "./src/routes/gendersRouter.js"
import mascotasRouter from "./src/routes/mascotasRouter.js"

const app = Express()
const port = 3000

app.use(cors())

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

// establecemos una instacia de la clase database
// que permitira la conexion a el servidor de la base de datos
new Database()

// archivos publicos
app.set('view engine', 'ejs')
app.set('views', './views')

// rutas de el servidor
app.get('/', (req, res) => res.send('Hello World!'))
app.use(Express.static('./public'))
app.use('/usuario', UsuarioRoute)
app.use(LoginRouter)
app.use('/raza', RazaRouter)
app.use('/categoria', categoriaRouter)
app.use('/genero', GeneroRouter)
app.use('/mascotas', mascotasRouter)

// documentacion
app.use('/documents', (req, res) => {
    res.render('documentacion.ejs')
})


app.listen(port, () => console.log(`ejecutando en puerto http://localhost:${port}`))