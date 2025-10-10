import express from 'express'
import cors from 'cors'
import morgan from 'morgan'
import dotenv from 'dotenv'
import authRoutes from './routes/authRoutes.js'
import userRoutes from './routes/userRoutes.js'
import communityRoutes from './routes/communityRoutes.js'
import adminRoutes from './routes/adminRoutes.js'
import errorHandler from './middleware/errorHandler.js'

dotenv.config()

const app = express()

app.use(cors({ origin: process.env.CLIENT_URL?.split(',') ?? '*', credentials: true }))
app.use(express.json())
app.use(morgan('dev'))

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() })
})

app.use('/api/auth', authRoutes)
app.use('/api/users', userRoutes)
app.use('/api/communities', communityRoutes)
app.use('/api/admin', adminRoutes)

app.use(errorHandler)

export default app
