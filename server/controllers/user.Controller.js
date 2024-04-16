// import {
//     Empresa,
//     Usuarios,
//     DescripLibros,
//     Compra,
//     Tema,
//     Libros
// } from '../models/associations.js';
import bcrypt from 'bcrypt';

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
export const editarPerfil = async (req, res) => {

};

// Eliminar Perfil
export const eliminarPerfil = async (req, res) => {

};

// Obtener las categorias 
export const temas = async (req, res) => {

};

// Obtener los libros
export const libros = async (req, res) => {

};

// Obtener todas las empresas
export const getAllEmpresas = async (req, res) => {

};