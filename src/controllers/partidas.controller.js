import { Partida } from '../models/Partida.js'

export const getPartidas = async (req, res) => {
    try {
        const partidas = await Partida.findAll()
        res.json(partidas)
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}
export const getPartida = async (req, res) => {
    try {
        const { id } = req.params
        const partida = await Partida.findByPk(id)
        if (!partida)
            return res.status(404).json({ message: "La partida solicitada no existe" })
        res.json(partida)        
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}

export const getPartidaByClave = async (req, res) => {
    try {
        const { clave } = req.params
        const partida = await Partida.findOne({ where: { clave: clave } })
        if (!partida)
            return res.status(404).json({ message: "La partida solicitada no existe" })
        res.json(partida)        
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}

export const addPartida = async (req, res) => {
    const { clave, descripcion } = req.body

    try {
        const newPartida = await Partida.create({
            clave,
            descripcion
        })
        res.json(newPartida)
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
   
}

export const updatePartida = async (req, res) => {
    try {
        const { id } = req.params
        const { clave, descripcion } = req.body

        const partida = await Partida.findByPk(id)
        partida.clave = clave
        partida.descripcion = descripcion
        await partida.save()

        res.json(partida)
        
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}

export const deletePartida = async (req, res) => {
    try {
        const { id } = req.params;
        await Partida.destroy({
            where: {
                id
            }
        })
        res.sendStatus(204)
    } catch (error) {
        return res.status(500).json({message: error.message})
    }
}