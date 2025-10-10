import { Router } from 'express'
import { body } from 'express-validator'
import { login, register, toggleTwoFactor } from '../controllers/authController.js'
import authenticate from '../middleware/authMiddleware.js'

const router = Router()

router.post(
  '/register',
  [
    body('email').isEmail(),
    body('password').isLength({ min: 8 }),
    body('role').optional().isIn(['user', 'instructor'])
  ],
  register
)

router.post(
  '/login',
  [body('email').isEmail(), body('password').isLength({ min: 8 })],
  login
)

router.post('/two-factor', authenticate, toggleTwoFactor)

export default router
