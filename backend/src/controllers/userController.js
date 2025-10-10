import { validationResult } from 'express-validator'
import { getUserProfile, listInstructors, updateProfile } from '../services/userService.js'

export async function me (req, res, next) {
  try {
    const user = await getUserProfile(req.user.id)
    res.json(user)
  } catch (error) {
    next(error)
  }
}

export async function saveProfile (req, res, next) {
  try {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() })
    }
    const profile = await updateProfile(req.user.id, req.body)
    res.json(profile)
  } catch (error) {
    next(error)
  }
}

export async function instructors (_req, res, next) {
  try {
    const users = await listInstructors()
    res.json(users)
  } catch (error) {
    next(error)
  }
}
