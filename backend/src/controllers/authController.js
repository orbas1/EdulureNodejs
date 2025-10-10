import { validationResult } from 'express-validator'
import { authenticateUser, enableTwoFactor, registerUser } from '../services/authService.js'

export async function register (req, res, next) {
  try {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() })
    }
    const { email, password, role, profile } = req.body
    const user = await registerUser({ email, password, role, profile })
    res.status(201).json({ id: user.id, email: user.email, role: user.role })
  } catch (error) {
    next(error)
  }
}

export async function login (req, res, next) {
  try {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() })
    }
    const { email, password } = req.body
    const tokens = await authenticateUser({ email, password })
    res.json(tokens)
  } catch (error) {
    next(error)
  }
}

export async function toggleTwoFactor (req, res, next) {
  try {
    const { emailOtp, googleOtp } = req.body
    const user = await enableTwoFactor(req.user.id, { emailOtp, googleOtp })
    res.json({ id: user.id, twoFactorEmail: user.twoFactorEmail, twoFactorGoogle: user.twoFactorGoogle })
  } catch (error) {
    next(error)
  }
}
