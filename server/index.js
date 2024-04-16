// Importando las dependencias
import express from 'express';
import cors from 'cors';
import session from 'express-session';

// Importamos la base de datos
import  db  from './database/db.js';

// Importamos las rutas
import user from './routes/user.routes.js';

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
app.use("/user", user);

// Comprobando la conexión con la base de datos
try{
    await db.authenticate()
    console.log("Conexion exitoda con la base de datos")
} catch (error) {
    console.log("Error en la base de datos ", error)
}

// Creación del servidor 
app.listen(9000, () => {
    console.log("Servidor ejecutandose en http://localhost:9000/")
})

