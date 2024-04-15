// Importación de las dependencias
import { DataTypes } from "sequelize";
import { db } from "../database/db";

const DescripLibros = db.define('descrip_libros', {
    COD_compra: {
        type: DataTypes.INTEGER(10),
        primaryKey: true
    },
    COD_libros: {
        type: DataTypes.INTEGER(11),
        primaryKey: true
    },
    titulo: {
        type: DataTypes.STRING(200),
        allowNull: false
    },
    valor: {
        type: DataTypes.INTEGER(10),
        allowNull: false
    }
}, {
    timestamps: false
})

export default DescripLibros;