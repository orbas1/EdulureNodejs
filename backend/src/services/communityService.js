import { Community, Membership, Post, User } from '../models/index.js'

export async function listCommunities () {
  return Community.findAll({ order: [['createdAt', 'DESC']] })
}

export async function getCommunity (slug) {
  return Community.findOne({ where: { slug }, include: [{ model: Post, as: 'posts', include: [{ model: User, as: 'author' }] }] })
}

export async function createCommunity (payload) {
  return Community.create(payload)
}

export async function joinCommunity ({ communityId, userId }) {
  const [membership] = await Membership.findOrCreate({ where: { communityId, userId }, defaults: { communityId, userId } })
  return membership
}
