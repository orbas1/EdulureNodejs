import dotenv from 'dotenv'
import app from './app.js'
import { sequelize } from './models/index.js'

dotenv.config()

const port = process.env.PORT || 4000

async function start () {
  try {
    await sequelize.authenticate()
    await sequelize.sync()
    app.listen(port, () => {
      console.log(`API server listening on port ${port}`)
    })
  } catch (error) {
    console.error('Unable to start server', error)
    process.exit(1)
  }
}

start()
