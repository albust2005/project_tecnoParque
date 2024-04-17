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

//Cerrar la sesión del usuario
export const getlogout = async (req, res) => {
  req.session.user.destroy((error) => {
    if (error) {
      console.log("error al cerrar sesion ", error);
      res.status(500).json({ message: "error al cerrar sesion" });
    } else {
      res.clearCookie("connect.sid");
      res.status(200).json({ message: "sesion cerrada correctamente" });
    }
  });
};

// Editar el perfil
export const editarPerfil = async (req, res) => {};

// Eliminar Perfil
export const eliminarPerfil = async (req, res) => {};

// Obtener las categorias
export const tema = async (req, res) => {
  try {
    const tema = await Tema.findAll();
    res.status(200).json(tema)
  } catch (error) {
    if (error instanceof Sequelize.DatabaseError) {
      // Manejar el error de base de datos
      res
        .status(400)
        .json({ message: `Error de base datos`, error: error });
    } else {
      // Manejar otros tipos de errores
      res.status(400).json({
        message: "Hubo error al traer la información de la categoria",
        error,
      });
    }
  }
};

// Obtener los libros
export const libros = async (req, res) => {
  try {
    const libros = await Libros.findAll();
    res.status(200).json(libros);
  } catch (error) {
    if (error instanceof Sequelize.DatabaseError) {
      // Manejar el error de base de datos
      res
        .status(400)
        .json({ message: `Error de base datos`, error: error.message });
    } else {
      // Manejar otros tipos de errores
      res.status(400).json({
        message: "Hubo error al traer la información de la categoria",
        error,
      });
    }
  }
};

// Obtener todas las empresas
export const getAllEmpresas = async (req, res) => {};
