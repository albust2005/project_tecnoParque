import express from "express";
import { publicarLibro, eliminarLibro, editarLibro, empresas } from "../controllers/empresa.Controller.js";


const router = express.Router()

//publicar libro
router.post("/publicar", publicarLibro)
//eliminar libro
router.delete("/eliminar/:COD", eliminarLibro)
//editar libro
router.put("/editar", editarLibro)
// obtener empresas
router.get("/empresas", empresas)

// // Probar imagenes
// router.post("/images", upload.single('image'), image)

export default router
