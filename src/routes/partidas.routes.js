import { Router } from "express";
import {getPartidas, addPartida, updatePartida, deletePartida, getPartida, getPartidaByClave} from "../controllers/partidas.controller.js"
import { verificarToken, isAsistente } from "../middlewares/index.js";

const router = Router()
router.get('/',getPartidas)
router.post('/',[verificarToken, isAsistente], addPartida)
router.put('/:id',[verificarToken, isAsistente],updatePartida)
router.delete('/:id',[verificarToken, isAsistente],deletePartida)
router.get('/:id',getPartida)
router.get('/clave/:clave',getPartidaByClave)
export default router