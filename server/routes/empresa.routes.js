import express from "express";
import { publicarLibro } from "../controllers/empresa.Controller.js";

const router = express.Router()

//publicar libro
router.post("/publicar", publicarLibro)

export default router
