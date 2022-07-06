//configuración del servidor express
import express from 'express'
import partidasRoutes from './routes/partidas.routes.js'

const app = express()

//middlewares
app.use(express.json())

app.use(partidasRoutes)

export default app
