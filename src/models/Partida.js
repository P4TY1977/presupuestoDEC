import { DataTypes } from 'sequelize'
import { sequelize } from '../database/database.js'

export const Partida = sequelize.define('partida', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    clave: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: true
    },
    descripcion: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    }
},
    {
        timestamps: false
    })
