import { Router } from 'express'
import authenticate from '../middleware/authMiddleware.js'
import { overview, warmCache } from '../controllers/adminAnalyticsController.js'

const router = Router()

router.use(authenticate)
router.use((req, res, next) => {
  if (req.user.role !== 'admin') {
    return res.status(403).json({ message: 'Forbidden' })
  }
  next()
})

router.get('/analytics/overview', overview)
router.post('/analytics/overview/warm', warmCache)

// Backwards compatibility for previous clients hitting /overview
router.get('/overview', overview)

export default router
