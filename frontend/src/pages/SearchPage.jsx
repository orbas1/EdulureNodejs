import { useState } from 'react'
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'

const filters = ['Courses', 'Communities', 'Tutors', 'Resources', 'Events']
const results = [
  {
    title: 'Designing Inclusive Learning Journeys',
    type: 'Course',
    description: 'A hybrid cohort built for global product teams with weekly live labs.',
    tags: ['Cohort', 'Product', 'Design'],
    action: 'Preview course'
  },
  {
    title: 'AI Educators Hub',
    type: 'Community',
    description: '4k+ AI leaders sharing curriculum, frameworks, and hiring pipelines.',
    tags: ['Community', 'AI', 'Education'],
    action: 'View community'
  },
  {
    title: 'Leadership Mastermind with Aisha Bello',
    type: 'Tutor',
    description: 'Weekly live sprints for emerging leaders to grow influence and clarity.',
    tags: ['Leadership', 'Mentorship'],
    action: 'Book a seat'
  }
]

const SearchPage = () => {
  const [query, setQuery] = useState('')
  const [activeFilter, setActiveFilter] = useState('Courses')

  return (
    <section className="bg-slate-50 py-16">
      <div className="mx-auto max-w-5xl space-y-6 px-6">
        <div className="card-surface space-y-4 p-8">
          <h1 className="text-2xl font-semibold text-slate-900">Explore the Edulure network</h1>
          <p className="text-sm text-slate-500">
            Powered by Meilisearch for instant discovery across courses, communities, and curated talent.
          </p>
          <div className="flex items-center gap-3 rounded-full border border-slate-200 bg-white px-6 py-3 shadow-sm">
            <MagnifyingGlassIcon className="h-5 w-5 text-slate-400" />
            <input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search for communities, courses, or instructors"
              className="w-full bg-transparent text-sm text-slate-600 focus:outline-none"
            />
          </div>
          <div className="flex flex-wrap gap-3">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-widest transition ${activeFilter === filter ? 'bg-brand text-white shadow-lg shadow-brand/30' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>
        <div className="space-y-4">
          {results
            .filter((result) =>
              result.title.toLowerCase().includes(query.toLowerCase()) && (activeFilter === 'Courses' ? result.type === 'Course' : true)
            )
            .map((result) => (
              <article key={result.title} className="card-surface flex flex-col gap-4 p-8 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <span className="text-xs font-semibold uppercase tracking-widest text-brand">{result.type}</span>
                  <h2 className="mt-2 text-xl font-semibold text-slate-900">{result.title}</h2>
                  <p className="mt-2 text-sm text-slate-600">{result.description}</p>
                  <div className="mt-3 flex flex-wrap gap-2 text-xs font-semibold uppercase tracking-widest text-slate-400">
                    {result.tags.map((tag) => (
                      <span key={tag} className="rounded-full bg-slate-100 px-3 py-1">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <button className="rounded-full bg-brand px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-brand/30 hover:bg-brand-dark">
                  {result.action}
                </button>
              </article>
            ))}
        </div>
      </div>
    </section>
  )
}

export default SearchPage
