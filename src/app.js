//configuración del servidor express
import express from 'express'
import partidasRoutes from './routes/partidas.routes.js'
import authRoutes from './routes/auth.routes.js'
import cors from 'cors'

const app = express()

//middlewares
app.use(express.json())

app.use(cors())

app.use('/partidas',partidasRoutes)
app.use('/auth',authRoutes)

app.use((err, req, res, next) => {
    return res.json({message: err.message}) 
})

export default app
