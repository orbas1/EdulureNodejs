import { Op, fn, col } from 'sequelize'
import User from '../models/User.js'
import Community from '../models/Community.js'
import Membership from '../models/Membership.js'
import Post from '../models/Post.js'

const cacheStore = new Map()
const CACHE_KEY = 'admin-overview'
const DEFAULT_TTL_SECONDS = Number.parseInt(process.env.ANALYTICS_CACHE_TTL ?? '900', 10)

function getTimestamps () {
  const now = new Date()
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate())
  const sevenDaysAgo = new Date(today)
  sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 6)
  const thirtyDaysAgo = new Date(today)
  thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 29)
  const sixtyDaysAgo = new Date(today)
  sixtyDaysAgo.setDate(sixtyDaysAgo.getDate() - 59)
  const ninetyDaysAgo = new Date(today)
  ninetyDaysAgo.setDate(ninetyDaysAgo.getDate() - 89)
  const fourteenDaysAgo = new Date(today)
  fourteenDaysAgo.setDate(fourteenDaysAgo.getDate() - 13)
  return { now, today, sevenDaysAgo, thirtyDaysAgo, sixtyDaysAgo, ninetyDaysAgo, fourteenDaysAgo }
}

function hydrateSeries (startDate, days, data) {
  const series = []
  for (let i = 0; i < days; i += 1) {
    const date = new Date(startDate)
    date.setDate(startDate.getDate() + i)
    const key = date.toISOString().slice(0, 10)
    const hit = data.find(item => item.date === key)
    series.push({ date: key, count: hit ? Number.parseInt(hit.count, 10) : 0 })
  }
  return series
}

async function fetchDailyCounts (model, column, startDate, days) {
  const raw = await model.findAll({
    attributes: [
      [fn('DATE', col(column)), 'date'],
      [fn('COUNT', col('id')), 'count']
    ],
    where: {
      [column]: {
        [Op.gte]: startDate
      }
    },
    group: [fn('DATE', col(column))],
    order: [[fn('DATE', col(column)), 'ASC']],
    raw: true
  })
  return hydrateSeries(startDate, days, raw)
}

async function computeRetentionRate (thirtyDayActive, sixtyDayActive, ninetyDayCohort) {
  if (ninetyDayCohort === 0) {
    return 0
  }
  const retention = (thirtyDayActive / ninetyDayCohort) * 100
  const capped = Math.min(retention, 100)
  return Number.parseFloat(capped.toFixed(1))
}

export async function getAdminAnalyticsOverview () {
  const cached = cacheStore.get(CACHE_KEY)
  const now = Date.now()
  if (cached && cached.expiresAt > now) {
    return cached.payload
  }

  const { sevenDaysAgo, thirtyDaysAgo, sixtyDaysAgo, ninetyDaysAgo, fourteenDaysAgo, now: currentDate } = getTimestamps()

  const [
    totalUsers,
    newUsers7,
    newUsers30,
    activeUsers30,
    activeUsers60,
    ninetyDayCohort,
    totalCommunities,
    activeCommunities,
    totalPosts,
    newPosts30,
    signupSeries,
    postSeries
  ] = await Promise.all([
    User.count(),
    User.count({ where: { createdAt: { [Op.gte]: sevenDaysAgo } } }),
    User.count({ where: { createdAt: { [Op.gte]: thirtyDaysAgo } } }),
    User.count({ where: { updatedAt: { [Op.gte]: thirtyDaysAgo } } }),
    User.count({ where: { updatedAt: { [Op.gte]: sixtyDaysAgo } } }),
    User.count({ where: { createdAt: { [Op.lte]: ninetyDaysAgo } } }),
    Community.count(),
    Membership.count({
      distinct: true,
      col: 'communityId',
      where: {
        status: 'active',
        updatedAt: { [Op.gte]: thirtyDaysAgo }
      }
    }),
    Post.count(),
    Post.count({ where: { createdAt: { [Op.gte]: thirtyDaysAgo } } }),
    fetchDailyCounts(User, 'createdAt', fourteenDaysAgo, 14),
    fetchDailyCounts(Post, 'createdAt', fourteenDaysAgo, 14)
  ])

  const retentionRate = await computeRetentionRate(activeUsers30, activeUsers60, ninetyDayCohort)
  const payload = {
    generatedAt: currentDate.toISOString(),
    summary: {
      totalUsers,
      newUsers: { sevenDays: newUsers7, thirtyDays: newUsers30 },
      activeUsers: { thirtyDays: activeUsers30, sixtyDays: activeUsers60 },
      totalCommunities,
      activeCommunities,
      totalPosts,
      newPosts30,
      retentionRate
    },
    sparkline: {
      userSignups: signupSeries,
      postPublishes: postSeries
    }
  }

  cacheStore.set(CACHE_KEY, {
    payload,
    expiresAt: now + DEFAULT_TTL_SECONDS * 1000
  })

  return payload
}

export function invalidateAnalyticsCache () {
  cacheStore.delete(CACHE_KEY)
}

export async function warmAnalyticsCache () {
  const payload = await getAdminAnalyticsOverview()
  return payload
}
