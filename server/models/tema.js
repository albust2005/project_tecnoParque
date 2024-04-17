//Importamos las dependencias al proyecto
import { DataTypes } from "sequelize";
import  db  from "../database/db.js";

const Tema = db.define('tema', {
    COD: {
        type: DataTypes.INTEGER(10),
        primaryKey: true
    },
    tema: {
        type: DataTypes.STRING(60),
        allowNull: false
    },
    image: {
        type: DataTypes.STRING(200)
    }
},{
    timestamps: false
})

export default Tema;    