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
import path from "path";
import multer from 'multer';


const storage = multer.diskStorage({
    destination: path.join('../docs'),
    filename: (req, file, cd) => {
        cd(null, `${Date.now()}-${file.originalname}`)
    }
})

export const upload = (multer({storage:storage})).single('archivo')

export const archivo = (req, res) => {
    console.log(req)
    const archivo = req.file
    res.json(archivo)
    console.log(archivo)
}

export const publicarLibro = async (req, res) => {
    const {
        COD,
        titulo,
        descripcion,
        costo,
        image,
        COD_tema,
        COD_empresa
    } = req.body

    let archivo = "";

    if (req.file) {
        archivo = req.file.filename;
        console.log(archivo)
    }

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
            res.status(401).json({ message: `Error de base datos`, error: error.message })
        } else {
            // Manejar otros tipos de errores
            res.status(402).json({ message: 'Error inesperado', error: error.message });
        }
    }
}



//Ruta para editar libro
export const editarLibro = async (req, res) => {
    const {
        COD,
        titulo,
        descripcion,
        costo,
        archivo,
        image,
        COD_tema,
        COD_empresa
    } = req.body;

    try {
        const libroExistente = await Libros.findOne({ where: { COD } });

        if (libroExistente) {
            await Libros.update(
                {
                    titulo,
                    descripcion,
                    costo,
                    archivo,
                    image,
                    COD_tema,
                    COD_empresa
                },
                { where: { COD } }
            );
            res.json({ message: "Libro editado correctamente" });
        } else {
            res.status(404).json({ message: "No se encontró ningún libro con el COD proporcionado" });
        }
    } catch (error) {
        if (error instanceof Sequelize.DatabaseError) {
            // Manejar el error de base de datos
            res.status(400).json({ message: "Error de base de datos", error: error.message });
        } else {
            // Manejar otros tipos de errores
            res.status(400).json({ message: "Error inesperado", error });
        }
    }
};


// Ruta para eliminar un libro
export const eliminarLibro = async (req, res) => {
    const { COD } = req.params;

    try {
        const libroEliminado = await Libros.destroy({
            where: {
                COD: COD
            }
        });

        if (libroEliminado === 1) {
            // El libro se eliminó correctamente
            res.status(200).json({ mensaje: 'Libro eliminado correctamente.' });
        } else {
            // No se encontró ningún libro con el COD proporcionado
            res.status(404).json({ error: 'No se encontró ningún libro con el COD proporcionado.' });
        }
    } catch (error) {
        // Error al intentar eliminar el libro
        console.error('Error al eliminar el libro:', error);
        res.status(500).json({ error: 'Error al eliminar el libro. Por favor, inténtalo de nuevo más tarde.' });
    }
};

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
