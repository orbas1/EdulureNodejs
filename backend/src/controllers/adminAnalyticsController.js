import { getAdminAnalyticsOverview, warmAnalyticsCache } from '../services/analyticsService.js'

export async function overview (req, res, next) {
  try {
    if (req.user.role !== 'admin') {
      return res.status(403).json({ message: 'Forbidden' })
    }
    const analytics = await getAdminAnalyticsOverview()
    res.json(analytics)
  } catch (error) {
    next(error)
  }
}

export async function warmCache (_req, res, next) {
  try {
    const analytics = await warmAnalyticsCache()
    res.json({ message: 'Analytics cache primed', analytics })
  } catch (error) {
    next(error)
  }
}
