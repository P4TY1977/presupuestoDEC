import jwt from 'jsonwebtoken'
import 'dotenv/config'
import { Usuario } from '../models/Empleado.js'

export const verificarToken= async(req, res, next) => {
    try {
        const token = req.headers["x-access-token"]
        
        if(!token) return res.status(403).json({message: "No está autorizado para realizar esta operación1"})

        const decodificado = jwt.verify(token, process.env.SECRET)

        req.idUsuario=decodificado.id

        const usuario = await Usuario.findByPk(req.idUsuario, {password: 0})

        if(!usuario)
            return res.status(403).json({message: 'No está autorizado para realizar esta operación2'})
        
        next()
    } catch (error) {
        console.log(error)
        return res.status(403).json({message: 'No está autorizado para realizar esta operación3'})
    }
}

export const isAsistente = async (req,res,next) =>{
    const usuario=await Usuario.findByPk(req.idUsuario)
    
    if(usuario.id_perfil==121){       
        next()
        return
    }
    return res.status(403).json({message: 'No está autorizado para realizar esta operación'})

}

export const isJefatura = async (req,res,next) =>{
    
}