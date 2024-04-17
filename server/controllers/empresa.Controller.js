import {
    Empresa,
    Usuarios,
    DescripLibros,
    Compra,
    Tema,
    Libros,
} from "../models/associations.js";
import bcrypt from "bcrypt";
import { Sequelize } from "sequelize";
import { usuarios } from "./user.Controller.js";


export const publicarLibro = async (req, res) => {
    const {
        COD,
        titulo,
        descripcion,
        costo,
        archivo,
        image,
        COD_tema,
        COD_empresa
    } = req.body

    try {
        await Libros.create({
            COD,
            titulo,
            descripcion,
            costo,
            archivo,
            image,
            COD_tema,
            COD_empresa
        })
        res.json({ message: "Libro publicado correctamente" })
    } catch (error) {
        if (error instanceof Sequelize.UniqueConstraintError) {
            // Manejar el error de restricción de unicidad
            res.status(400).json({ message: `Los datos ingresados ya existen en el sistema`, error: error.errors })
        } else if (error instanceof Sequelize.DatabaseError) {
            // Manejar el error de base de datos
            res.status(400).json({ message: `Error de base datos`, error: error.message })
        } else {
            // Manejar otros tipos de errores
            res.status(400).json({ message: 'Error inesperado', error });
        }
    }
}

// obtener todas las empresas
export const empresas = async (req, res) => {
    try {
        const empresas = await Empresa.findAll();
        res.status(200).json(empresas);
    } catch (error) {
        if (error instanceof Sequelize.DatabaseError) {
            // Manejar el error de base de datos
            res
              .status(400)
              .json({ message: `Error de base datos`, error: error.message });
        } else {
            // Manejar otros tipos de errores
            res.status(400).json({
              message: "Hubo error al traer la información de los usuarios",
              error,
            });
        }
    }
}