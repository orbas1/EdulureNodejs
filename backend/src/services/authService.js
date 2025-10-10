import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { User, Profile } from '../models/index.js'

const SALT_ROUNDS = 10

export async function registerUser ({ email, password, role = 'user', profile }) {
  const existing = await User.findOne({ where: { email } })
  if (existing) {
    throw new Error('Email already registered')
  }

  const passwordHash = await bcrypt.hash(password, SALT_ROUNDS)
  const user = await User.create({ email, passwordHash, role })

  if (profile) {
    await Profile.create({ ...profile, userId: user.id })
  }

  return user
}

export async function authenticateUser ({ email, password }) {
  const user = await User.findOne({ where: { email } })
  if (!user) {
    throw new Error('Invalid credentials')
  }
  const isValid = await bcrypt.compare(password, user.passwordHash)
  if (!isValid) {
    throw new Error('Invalid credentials')
  }

  return generateTokens(user)
}

export function generateTokens (user) {
  const payload = { sub: user.id, role: user.role }
  const accessToken = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRY || '7d' })
  const refreshToken = jwt.sign(payload, process.env.REFRESH_TOKEN_SECRET, { expiresIn: process.env.REFRESH_TOKEN_EXPIRY || '30d' })
  return { accessToken, refreshToken }
}

export async function enableTwoFactor (userId, { emailOtp, googleOtp }) {
  const user = await User.findByPk(userId)
  if (!user) {
    throw new Error('User not found')
  }
  user.twoFactorEmail = Boolean(emailOtp)
  user.twoFactorGoogle = Boolean(googleOtp)
  await user.save()
  return user
}
