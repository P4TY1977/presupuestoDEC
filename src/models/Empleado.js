import { DataTypes, Model } from 'sequelize'
import { sequelize } from '../database/database.js'
import bcrypt from 'bcryptjs'
class Empleado extends Model {
    async encriptarPass(password) {
        const salt = await bcrypt.genSalt(10)
        return await bcrypt.hash(password, salt)              
     }
     async compararPass(password, passwordEncryptado) {
         return await bcrypt.compare(password, passwordEncryptado)
       }
}

Empleado.init({
    id_empleado: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        allowNull: false,
        unique: true
    },
    password_encriptado: {
        type: DataTypes.STRING,
        allowNull: false
    },
    id_perfil: {
        type: DataTypes.BIGINT,
        allowNull: false,

    }
}, {
  // Other model options go here
  timestamps: false,
  sequelize, // We need to pass the connection instance
  modelName: 'Empleado', // We need to choose the model name
  tableName: 'empleado'
});

export const Usuario= sequelize.models.Empleado 
