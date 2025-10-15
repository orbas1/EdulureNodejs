import PropTypes from 'prop-types'
import clsx from 'clsx'

const options = [
  { id: '7d', label: '7d' },
  { id: '30d', label: '30d' },
  { id: 'all', label: 'All' }
]

const PeriodToggle = ({ value, onChange }) => {
  return (
    <div className="inline-flex rounded-full border border-slate-200 bg-white p-1 shadow-sm">
      {options.map(option => (
        <button
          key={option.id}
          type="button"
          onClick={() => onChange(option.id)}
          className={clsx(
            'rounded-full px-4 py-1 text-sm font-semibold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-500',
            value === option.id ? 'bg-sky-600 text-white shadow' : 'text-slate-600 hover:text-slate-900'
          )}
        >
          {option.label}
        </button>
      ))}
    </div>
  )
}

PeriodToggle.propTypes = {
  value: PropTypes.oneOf(['7d', '30d', 'all']).isRequired,
  onChange: PropTypes.func.isRequired
}

export default PeriodToggle
