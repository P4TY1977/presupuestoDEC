import { Usuario } from '../models/Empleado.js'
import { Perfil } from '../models/Perfil.js'
import jwt from 'jsonwebtoken'
import 'dotenv/config'

export const registrar = async (req, res) => {
    const {id_empleado, password, id_perfil} = req.body
    const usuario=new Usuario({id_empleado, id_perfil})
    usuario.password_encriptado= await usuario.encriptarPass(password)
   try {
    //probablemente no sea necesario verificar el perfil, pues se seleccionará de un select
    const perfil = await Perfil.findByPk(id_perfil)
    if (!perfil)
        return res.status(404).json({ message: "El perfil indicado no existe" })
    
    const usuarioGuardado=await usuario.save()
    
    const token=jwt.sign({id: usuarioGuardado.id_empleado},process.env.SECRET,{expiresIn: 86400})
    res.json(token)
   } catch (error) {
    console.log(error)
   }
}

export const login = async (req, res) => {
    const usuarioExistente = await Usuario.findByPk(req.body.id_empleado)
    if (!usuarioExistente)
        return res.status(404).json({ message: "Usuario o password incorrecto" })
    console.log(usuarioExistente.password_encriptado)
    console.log(req.body.password)
    const passwordCorrecto = await usuarioExistente.compararPass( 
        req.body.password, usuarioExistente.password_encriptado)
    if (!passwordCorrecto)
        return res.status(401).json({ token: null, message: "Usuario o password incorrecto" })
    console.log(usuarioExistente)
    const token=jwt.sign({id: usuarioExistente.id_empleado},process.env.SECRET,{expiresIn: 86400})
    res.json({ token })
}