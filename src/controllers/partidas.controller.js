import { Partida } from '../models/Partida.js'

export const getPartidas = async (req, res, next) => {
    try {
        const partidas = await Partida.findAll()
        res.json(partidas)
    } catch (error) {
        next(error)
    }
}
export const getPartida = async (req, res, next) => {
    try {
        const { id } = req.params
        const partida = await Partida.findByPk(id)
        if (!partida)
            return res.status(404).json({ message: "La partida solicitada no existe" })
        res.json(partida)        
    } catch (error) {
        next(error)
    }
}

export const getPartidaByClave = async (req, res, next) => {
    try {
        const { clave } = req.params
        const partida = await Partida.findOne({ where: { clave: clave } })
        if (!partida)
            return res.status(404).json({ message: "La partida solicitada no existe" })
        res.json(partida)        
    } catch (error) {
        next(error)
    }
}

export const addPartida = async (req, res, next) => {
    const { clave, descripcion } = req.body

    try {
        const newPartida = await Partida.create({
            clave,
            descripcion
        })
        res.json(newPartida)
    } catch (error) {
        next(error)
    }
   
}

export const updatePartida = async (req, res, next) => {
    try {
        const { id } = req.params
        const { clave, descripcion } = req.body

        const partida = await Partida.findByPk(id)
        partida.clave = clave
        partida.descripcion = descripcion
        await partida.save()

        res.json(partida)
        
    } catch (error) {
        next(error)
    }
}

export const deletePartida = async (req, res, next) => {
    try {
        const { id } = req.params;
        await Partida.destroy({
            where: {
                id
            }
        })
        res.sendStatus(204)
    } catch (error) {
        next(error)
    }
}