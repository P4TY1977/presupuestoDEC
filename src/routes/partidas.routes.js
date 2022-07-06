import { Router } from "express";
import {getPartidas, addPartida, updatePartida, deletePartida, getPartida, getPartidaByClave} from "../controllers/partidas.controller.js"

const router = Router()
router.get('/partidas',getPartidas)
router.post('/partidas',addPartida)
router.put('/partidas/:id',updatePartida)
router.delete('/partidas/:id',deletePartida)
router.get('/partidas/:id',getPartida)
router.get('/partidas/clave/:clave',getPartidaByClave)
export default router