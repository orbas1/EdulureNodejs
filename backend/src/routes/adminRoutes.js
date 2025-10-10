import { Router } from 'express'
import authenticate from '../middleware/authMiddleware.js'

const router = Router()

router.use(authenticate)

router.get('/overview', (req, res) => {
  if (req.user.role !== 'admin') {
    return res.status(403).json({ message: 'Forbidden' })
  }
  res.json({
    metrics: {
      activeCommunities: 12,
      instructorsPending: 4,
      learnersThisWeek: 1842
    }
  })
})

export default router
