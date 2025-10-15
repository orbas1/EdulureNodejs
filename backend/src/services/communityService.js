import { Community, Membership, Post, User } from '../models/index.js'
import { invalidateAnalyticsCache } from './analyticsService.js'

export async function listCommunities () {
  return Community.findAll({ order: [['createdAt', 'DESC']] })
}

export async function getCommunity (slug) {
  return Community.findOne({ where: { slug }, include: [{ model: Post, as: 'posts', include: [{ model: User, as: 'author' }] }] })
}

export async function createCommunity (payload) {
  const community = await Community.create(payload)
  invalidateAnalyticsCache()
  return community
}

export async function joinCommunity ({ communityId, userId }) {
  const [membership, created] = await Membership.findOrCreate({ where: { communityId, userId }, defaults: { communityId, userId } })
  if (created) {
    invalidateAnalyticsCache()
  }
  return membership
}
