import { DataTypes } from 'sequelize'
import { sequelize } from '../database/database.js'

export const Partida = sequelize.define('partida', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    clave: {
        type: DataTypes.INTEGER
    },
    descripcion: {
        type: DataTypes.STRING
    }
},
    {
        timestamps: false
    })
