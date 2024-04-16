import express from 'express';
import { getuser, postuser } from '../controllers/auth.Controller.js';

// Para intregar las rutas
const router = express.Router()

// Ruta para iniciar sesion con usuario
router.post('/login/usuario', getuser);
// Ruta para registrar un usuario
router.post('/registeruser', postuser);


export default router;