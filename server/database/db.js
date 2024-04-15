//importamos dependencias
import { Sequelize } from 'sequelize';

export const db = new Sequelize('project_tecnoparque', 'root', '', {
    host: 'localhost', 
    dialect: 'mysql'
}); 