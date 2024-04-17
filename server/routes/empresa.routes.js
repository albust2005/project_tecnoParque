import express from "express";
import { empresas, publicarLibro } from "../controllers/empresa.Controller.js";

const router = express.Router()

//publicar libro
router.post("/publicar", publicarLibro)
// obtener empresas
router.get("/empresas", empresas)

export default router
