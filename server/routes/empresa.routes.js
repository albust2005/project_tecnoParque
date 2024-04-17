import express from "express";
import { publicarLibro, eliminarLibro, editarLibro } from "../controllers/empresa.Controller.js";

const router = express.Router()

//publicar libro
router.post("/publicar", publicarLibro)
//eliminar libro
router.delete("/eliminar/:COD", eliminarLibro)
//editar libro
router.put("/editar", editarLibro)
export default router
