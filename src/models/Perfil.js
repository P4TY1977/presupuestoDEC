import { DataTypes } from 'sequelize'
import { sequelize } from '../database/database.js'
import { Usuario } from './Empleado.js'

export const Perfil = sequelize.define('sys_cat_perfil', {
    id_sys_perfil: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        //autoIncrement: true,
        allowNull: false,
        unique: true
    },
    sys_perfil: {
        type: DataTypes.CHAR(100),
        allowNull: false       
    },
    desc_sys_perfil: {
        type: DataTypes.CHAR(250),
        allowNull: false,
        
    },
    autoridad: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    },
    app_practicas_campo: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    },
    app_practicas_campo: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    },
    app_encuesta_equidad_genero:{
        type: DataTypes.BOOLEAN,
        defaultValue: false
    },
    app_becas: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    },
    app_tutores: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    },
    app_sal_retorno_bienes: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    },
    app_servicios: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    },
    app_usuarios: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    },
    app_encuesta_habitos_alimenticios: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    },
    app_encuesta_preferencias_deportivas: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    },
    app_encuesta_perfil_aprendizaje: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    },
    app_encuesta_perfil_pensamiento: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    },
    app_buzon: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    },
    app_adquisiciones: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    },
    app_prestamos: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    },
    app_bienes: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    },
    app_prestamos_bicicletas: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    },
    app_soporte: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    },
    app_violencia_genero: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    },
    app_servicio_social: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    },
    app_informes_docencia: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    },
   /* después  se creará esta columna app_presupuesto: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    },*/
},
{
    timestamps: false,
    tableName: 'sys_cat_perfil'
})

Perfil.hasMany( Usuario, { foreignKey: 'id_perfil',
sourceKey: 'id_sys_perfil'})

Usuario.belongsTo(Perfil,{foreignKey: 'id_perfil',
tergetId: 'id_sys_perfil'})
