import { User, Profile } from '../models/index.js'

export async function getUserProfile (userId) {
  return User.findByPk(userId, { include: [{ model: Profile, as: 'profile' }] })
}

export async function updateProfile (userId, payload) {
  const [profile] = await Profile.findOrCreate({ where: { userId }, defaults: { userId } })
  Object.assign(profile, payload)
  await profile.save()
  return profile
}

export async function listInstructors () {
  return User.findAll({ where: { role: 'instructor' }, include: [{ model: Profile, as: 'profile' }] })
}
