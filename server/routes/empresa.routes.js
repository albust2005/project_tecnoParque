import express from "express";
import { publicarLibro, eliminarLibro } from "../controllers/empresa.Controller.js";

const router = express.Router()

//publicar libro
router.post("/publicar", publicarLibro)
//eliminar libro
router.delete("/eliminar/:COD", eliminarLibro)
export default router
