import PropTypes from 'prop-types'
import { ArrowDownIcon, ArrowUpIcon } from '@heroicons/react/24/outline'

const trendStyles = {
  up: 'text-emerald-600 bg-emerald-50',
  down: 'text-rose-600 bg-rose-50',
  neutral: 'text-slate-600 bg-slate-100'
}

const AdminKpiCard = ({ icon, label, value, deltaLabel, trend = 'neutral', helper }) => {
  const trendStyle = trendStyles[trend] ?? trendStyles.neutral

  return (
    <article className="group rounded-3xl border border-slate-100 bg-white p-6 shadow-lg shadow-slate-100 transition-all hover:-translate-y-1 hover:shadow-xl">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-50 text-sky-600">
            {icon}
          </span>
          <div>
            <p className="text-sm font-medium text-slate-500">{label}</p>
            <p className="text-3xl font-semibold tracking-tight text-slate-900">{value}</p>
          </div>
        </div>
      </div>
      <div className="mt-5 flex items-center gap-2">
        <span className={`inline-flex items-center gap-1 rounded-full px-3 py-1 text-xs font-semibold ${trendStyle}`}>
          {trend === 'up' && <ArrowUpIcon className="h-4 w-4" />}
          {trend === 'down' && <ArrowDownIcon className="h-4 w-4" />}
          {deltaLabel}
        </span>
        {helper && <span className="text-xs text-slate-500">{helper}</span>}
      </div>
    </article>
  )
}

AdminKpiCard.propTypes = {
  icon: PropTypes.node.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  deltaLabel: PropTypes.string.isRequired,
  trend: PropTypes.oneOf(['up', 'down', 'neutral']),
  helper: PropTypes.string
}

export default AdminKpiCard
