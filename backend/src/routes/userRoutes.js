import { Router } from 'express'
import { body } from 'express-validator'
import { instructors, me, saveProfile } from '../controllers/userController.js'
import authenticate from '../middleware/authMiddleware.js'

const router = Router()

router.get('/me', authenticate, me)
router.put(
  '/me/profile',
  authenticate,
  [
    body('firstName').optional().isString(),
    body('lastName').optional().isString(),
    body('headline').optional().isString(),
    body('bio').optional().isString()
  ],
  saveProfile
)
router.get('/instructors', instructors)

export default router
