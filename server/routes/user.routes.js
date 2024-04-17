import express from 'express';
import { 
    getlogout,
    editarPerfil,
    eliminarPerfil,
    tema,
    libros,
    getAllEmpresas
} from '../controllers/user.Controller.js';

// Creamos la variable de la ruta
const router = express.Router();

// Ruta para cerrar sesion
router.post("/loginout", getlogout);
// Ruta para editar el perfil del usuario
router.put("/editarPerfil", editarPerfil);
//Ruta para eliminar el perfil del usuario
router.delete("/eliminarPerfil", eliminarPerfil);
// Ruta para obtener las categorias
router.get("/temas", tema);
// Ruta para obtener todos los libros
router.get("/libros", libros);
// Ruta para obtener empresas
router.get("/empresas", getAllEmpresas);

export default router;

