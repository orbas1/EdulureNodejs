import PropTypes from 'prop-types'

const getBounds = (series) => {
  if (!series?.length) {
    return { min: 0, max: 1 }
  }
  const values = series.map(point => point.count)
  const min = Math.min(...values, 0)
  const max = Math.max(...values, 1)
  return { min, max }
}

const buildPath = (series, width, height) => {
  if (!series.length) {
    return ''
  }
  const { min, max } = getBounds(series)
  const range = max - min || 1
  if (series.length === 1) {
    const value = height - ((series[0].count - min) / range) * height
    return `M0,${value} L${width},${value}`
  }
  const step = width / (series.length - 1)
  return series
    .map((point, index) => {
      const x = step * index
      const y = height - ((point.count - min) / range) * height
      return `${index === 0 ? 'M' : 'L'}${x},${y}`
    })
    .join(' ')
}

const SparklineCard = ({ title, subtitle, series, accent = '#2563EB', footer }) => {
  const width = 360
  const height = 160
  const path = buildPath(series, width, height)
  const gradientId = `sparkline-${title.toLowerCase().replace(/\s+/g, '-')}`

  return (
    <article className="rounded-3xl border border-slate-100 bg-white p-6 shadow-lg shadow-slate-100">
      <header className="flex items-center justify-between">
        <div>
          <h2 className="text-lg font-semibold text-slate-900">{title}</h2>
          <p className="text-sm text-slate-500">{subtitle}</p>
        </div>
      </header>
      <div className="mt-6">
        {series.length > 0 ? (
          <svg viewBox={`0 0 ${width} ${height}`} role="img" aria-label={`${title} sparkline`} className="h-48 w-full">
            <defs>
              <linearGradient id={gradientId} x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor={`${accent}99`} />
                <stop offset="100%" stopColor={`${accent}05`} />
              </linearGradient>
            </defs>
            <path d={path} fill="none" stroke={accent} strokeWidth="3" strokeLinecap="round" />
            <path
              d={`${path} L ${width} ${height} L 0 ${height} Z`}
              fill={`url(#${gradientId})`}
              opacity="0.35"
            />
          </svg>
        ) : (
          <p className="rounded-2xl bg-slate-50 p-6 text-sm text-slate-500">No activity recorded for the selected period.</p>
        )}
      </div>
      {footer && <footer className="mt-4 text-sm text-slate-500">{footer}</footer>}
    </article>
  )
}

SparklineCard.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  series: PropTypes.arrayOf(
    PropTypes.shape({
      date: PropTypes.string.isRequired,
      count: PropTypes.number.isRequired
    })
  ).isRequired,
  accent: PropTypes.string,
  footer: PropTypes.string
}

export default SparklineCard
