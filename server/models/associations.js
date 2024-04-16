// Importación de los modelos realizadod
import Usuarios from "../models/usuarios.js";
import Tema from "../models/tema.js";
import Libros from "../models/libros.js";
import Empresa from "../models/empresa.js";
import DescripLibros from "../models/descrip_libros.js";
import Compra from "../models/compra.js";

// Relación de tema 
Tema.hasMany(Libros, { foreignKey: 'COD_tema', as: 'libros'});

// Relación muchos a muchos con compra y libros
Compra.belongsToMany(Libros, { through: DescripLibros, foreignKey: 'COD_compra'});
Libros.belongsToMany(Compra, { through: DescripLibros, foreignKey: 'COD_libros'});

//Relación de usuarios
Usuarios.hasMany(Compra, { foreignKey: 'ID_usuarios', as: 'compra'});

// Relación de empresa
Empresa.hasMany(Libros, { foreignKey: 'COD_empresa', as: 'empresa'});

export {
    Usuarios,
    Tema,
    Libros,
    Empresa,
    DescripLibros,
    Compra
};