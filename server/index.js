// Importando las dependencias
import express from 'express';
import cors from 'cors';
import session from 'express-session';
import { PORT } from './config.js';

// Importamos la base de datos
import  db  from './database/db.js';

// Importamos las rutas
import auth from './routes/auth.routes.js';
import user from './routes/user.routes.js';
import empresa from './routes/empresa.routes.js'
import payment from './routes/payment.routes.js'

// Iniciando el servidor
const app = express()

//middlewares
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }));
app.use(session({
    secret: "tu_secreto",
    resave: false,
    saveUninitialized: true,
}));

// Rutas de la navegación
app.use("/", auth);
app.use("/user", user);
app.use("/empresa", empresa);
app.use("/payment", payment);

// Comprobando la conexión con la base de datos
try{
    await db.authenticate()
    console.log("Conexion exitoda con la base de datos")
} catch (error) {
    console.log("Error en la base de datos ", error)
}

// Creación del servidor 
app.listen(PORT, () => {
    console.log(`Servidor ejecutandose en http://localhost:${PORT}/`)
})

