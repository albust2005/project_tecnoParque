// Importando dependencias utilizadas
import { Usuarios, Tema, Libros, Empresa, DescripLibros, Compra } from '../models/associations.js'
import bcrypt from 'bcrypt';
import session from 'express-session';
import { Sequelize } from 'sequelize';
import db from '../database/db.js';

// Ingresar la información de los usuarios en la base de datos
export const postuser = async (req, res) => {
    const {
        ID,
        nombre_c,
        numero_tarjeta,
        correo,
        username,
        contrasena
    } = req.body
    try {
        const hashedPassword = await bcrypt.hash(contrasena, 5)
        await Usuarios.create({
            ID,
            nombre_c,
            numero_tarjeta,
            correo,
            username,
            contrasena: hashedPassword
        })
        res.json({ message: "Registro creado correctamente" })
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

// Esta parte valida la información del rol de usuario para iniciar sesion
export const getuser = async (req, res) => {
    const { username, contrasena } = req.body
    console.log(username, contrasena)
    try {
        const user = await Usuarios.findOne({ Where: { username: username } })
        if (user !== null) {
            console.log("esta es la contraseña ingresada por el usuario: ", contrasena)
            console.log(user.contrasena)
            let comparacion = bcrypt.compareSync(contrasena, user.contrasena)

            if (comparacion) {
                req.session.user = {
                    ID: user.ID,
                    nombre_c: user.nombre_c,
                    numero_tarjeta: user.numero_tarjeta,
                    correo: user.correo,
                    username: user.username,
                    contrasena: user.contrasena
                }
                res.status(200).json({ message: "Inicio de sesión exitoso" })
            } else {
                res.status(401).json({ message: "Nombre de usuarios y/o contraseña incorrecto" });
            }
        }
    } catch (error) {
        console.log("Error al iniciar sesión", error)
        res.status(400).json({ message: "Error al iniciar sesión" });
    }
}


//ruta para iniciar sesion como empresa 
export const getempresa = async (req, res) => {
    const { username, contrasena } = req.body
    try {
        // const user = await SolicitudEmpresa.findOne({where:{ username: username}})
        const user = await Empresa.findOne({ where: { username: username } })
        if (user !== null) {
            console.log("esta es la contraseña ingresada por la empresa: ",contrasena)
            // console.log(user.contrasena)
            let comparacion = bcrypt.compareSync(contrasena,user.contrasena)
            

            console.log("esta es la comparacion: ",comparacion)
            if (comparacion){
                res.status(200).json({
                    message:"Inicio de sesión exitoso"
                });
            }else{
                res.status(401).json({message:"Nombre de usuario y/o contraseña incorrecta"});
            }
        } else {
            res.status(401).json({ menssage: "Nombre de usuario y/o contraseña incorrecta user null" });
        }
    } catch (error) {
        console.log("Error al iniciar sesión", error)
        res.status(401).json({ message: "Error al iniciar sesión" });
    }
}