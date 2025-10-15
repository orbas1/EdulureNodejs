import { useCallback, useEffect, useMemo, useState } from 'react'
import axios from 'axios'
import { ArrowPathIcon, ChartBarIcon, UsersIcon, UserGroupIcon, ChartPieIcon } from '@heroicons/react/24/outline'
import AdminKpiCard from '../components/admin/AdminKpiCard'
import AdminKpiSkeleton from '../components/admin/AdminKpiSkeleton'
import PeriodToggle from '../components/admin/PeriodToggle'
import SparklineCard from '../components/admin/SparklineCard'

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL ?? 'http://localhost:4000/api'

const formatNumber = (value) => new Intl.NumberFormat('en-US').format(value ?? 0)

const sumWindow = (series, window) => {
  if (!Array.isArray(series) || series.length === 0) return 0
  return series.slice(-window).reduce((total, point) => total + point.count, 0)
}

const evaluateTrend = (series, window) => {
  if (!Array.isArray(series) || series.length < window * 2) {
    return 'neutral'
  }
  const current = series.slice(-window).reduce((total, point) => total + point.count, 0)
  const previous = series.slice(-(window * 2), -window).reduce((total, point) => total + point.count, 0)
  if (current > previous) return 'up'
  if (current < previous) return 'down'
  return 'neutral'
}

const AdminAnalyticsPage = () => {
  const [analytics, setAnalytics] = useState(null)
  const [period, setPeriod] = useState('30d')
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [refreshing, setRefreshing] = useState(false)

  const fetchAnalytics = useCallback(async () => {
    try {
      setError(null)
      const { data } = await axios.get(`${API_BASE_URL}/admin/analytics/overview`, { withCredentials: true })
      setAnalytics(data)
    } catch (err) {
      setError(err.response?.data?.message ?? 'Unable to load analytics right now.')
    } finally {
      setLoading(false)
      setRefreshing(false)
    }
  }, [])

  useEffect(() => {
    fetchAnalytics()
  }, [fetchAnalytics])

  const handleRefresh = async () => {
    setRefreshing(true)
    await fetchAnalytics()
  }

  const kpis = useMemo(() => {
    if (!analytics) return []
    const { summary, sparkline } = analytics
    const userDelta = period === 'all' ? summary.newUsers.thirtyDays : (period === '7d' ? sumWindow(sparkline.userSignups, 7) : summary.newUsers.thirtyDays)
    const postDelta = period === 'all' ? summary.newPosts30 : (period === '7d' ? sumWindow(sparkline.postPublishes, 7) : summary.newPosts30)

    return [
      {
        key: 'total-users',
        icon: <UsersIcon className="h-6 w-6" />,
        label: 'Total users',
        value: formatNumber(summary.totalUsers),
        deltaLabel: period === 'all' ? `${formatNumber(summary.newUsers.thirtyDays)} joined last 30 days` : `${formatNumber(userDelta)} new` ,
        trend: period === '7d' ? evaluateTrend(sparkline.userSignups, 7) : (userDelta > 0 ? 'up' : 'neutral'),
        helper: period === '7d' ? 'vs previous 7 days' : (period === 'all' ? 'Lifetime total with 30-day callout' : 'Rolling 30-day trend')
      },
      {
        key: 'active-users',
        icon: <ChartBarIcon className="h-6 w-6" />,
        label: 'Active users',
        value: formatNumber(summary.activeUsers.thirtyDays),
        deltaLabel: `${formatNumber(summary.activeUsers.sixtyDays)} active last 60 days`,
        trend: summary.activeUsers.thirtyDays >= summary.activeUsers.sixtyDays * 0.6 ? 'up' : 'neutral',
        helper: 'Engaged within 30 days'
      },
      {
        key: 'communities',
        icon: <UserGroupIcon className="h-6 w-6" />,
        label: 'Communities',
        value: formatNumber(summary.totalCommunities),
        deltaLabel: `${formatNumber(summary.activeCommunities)} active`,
        trend: summary.activeCommunities > 0 ? 'up' : 'neutral',
        helper: 'Active in last 30 days'
      },
      {
        key: 'posts',
        icon: <ChartPieIcon className="h-6 w-6" />,
        label: 'Posts published',
        value: formatNumber(summary.totalPosts),
        deltaLabel: period === 'all' ? `${formatNumber(summary.newPosts30)} in 30 days` : `${formatNumber(postDelta)} new`,
        trend: period === '7d' ? evaluateTrend(sparkline.postPublishes, 7) : (postDelta > 0 ? 'up' : 'neutral'),
        helper: period === '7d' ? 'vs previous 7 days' : (period === 'all' ? 'Lifetime total with 30-day callout' : 'Rolling 30-day trend')
      }
    ]
  }, [analytics, period])

  return (
    <section className="bg-slate-50 py-12">
      <div className="mx-auto max-w-7xl px-6">
        <header className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-sky-600">Admin analytics</p>
            <h1 className="mt-2 text-3xl font-semibold text-slate-900">Monitor platform health</h1>
            <p className="mt-1 text-sm text-slate-500">Stay ahead of community momentum with live engagement metrics.</p>
          </div>
          <div className="flex flex-col items-start gap-3 md:flex-row md:items-center">
            <PeriodToggle value={period} onChange={setPeriod} />
            <button
              type="button"
              onClick={handleRefresh}
              disabled={refreshing}
              className="inline-flex items-center gap-2 rounded-full bg-sky-600 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-sky-600/30 transition hover:bg-sky-700 disabled:cursor-not-allowed disabled:bg-slate-300"
            >
              <ArrowPathIcon className={`h-5 w-5 ${refreshing ? 'animate-spin' : ''}`} />
              Refresh
            </button>
          </div>
        </header>

        {error && (
          <div className="mt-8 rounded-3xl border border-rose-100 bg-rose-50 p-4 text-rose-700">
            {error}
          </div>
        )}

        <section className="mt-8 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {loading
            ? Array.from({ length: 4 }).map((_, index) => <AdminKpiSkeleton key={index} />)
            : kpis.map(kpi => (
              <AdminKpiCard
                key={kpi.key}
                icon={kpi.icon}
                label={kpi.label}
                value={kpi.value}
                deltaLabel={kpi.deltaLabel}
                trend={kpi.trend}
                helper={kpi.helper}
              />
            ))}
        </section>

        {!loading && analytics && (
          <section className="mt-12 grid gap-6 xl:grid-cols-5">
            <div className="xl:col-span-3">
              <SparklineCard
                title="Signups trend"
                subtitle="Last 14 days"
                series={analytics.sparkline.userSignups}
                footer="Values represent verified account activations per day."
              />
            </div>
            <div className="xl:col-span-2">
              <SparklineCard
                title="Posts trend"
                subtitle="Last 14 days"
                series={analytics.sparkline.postPublishes}
                accent="#0D9488"
                footer={`Retention rate ${analytics.summary.retentionRate}% - calculated from 90-day cohort.`}
              />
            </div>
          </section>
        )}
      </div>
    </section>
  )
}

export default AdminAnalyticsPage
