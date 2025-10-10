const ProfilePage = () => {
  const badges = ['Community Architect', 'Top Instructor', 'Curriculum Innovator']
  const metrics = [
    { label: 'Communities', value: 6 },
    { label: 'Learners', value: '18.4k' },
    { label: 'Completion Rate', value: '94%' }
  ]

  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-5xl space-y-8 px-6">
        <div className="card-surface flex flex-col gap-6 p-10 md:flex-row">
          <div className="flex items-center gap-6">
            <div className="h-24 w-24 rounded-full border-4 border-brand bg-[url('https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=200&q=80')] bg-cover bg-center" />
            <div>
              <h1 className="text-3xl font-semibold text-slate-900">Dr. Priya Singh</h1>
              <p className="text-sm text-slate-500">Principal Instructor · Data Science & Responsible AI</p>
              <div className="mt-4 flex flex-wrap gap-2 text-xs font-semibold uppercase tracking-widest text-brand">
                {badges.map((badge) => (
                  <span key={badge} className="rounded-full bg-brand/10 px-3 py-1 text-brand">
                    {badge}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <div className="flex flex-1 items-center justify-end gap-6">
            {metrics.map((metric) => (
              <div key={metric.label} className="text-center">
                <p className="text-2xl font-semibold text-slate-900">{metric.value}</p>
                <p className="text-xs font-semibold uppercase tracking-widest text-slate-400">{metric.label}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="grid gap-8 md:grid-cols-2">
          <div className="card-surface space-y-4 p-8">
            <h2 className="text-lg font-semibold text-slate-900">About</h2>
            <p className="text-sm text-slate-600">
              Priya leads global data science communities with a focus on ethical AI adoption. She has built multi-language cohorts that helped 40k learners transition into AI-first roles.
            </p>
            <div className="grid gap-4 text-sm text-slate-500">
              <p><span className="font-semibold text-slate-900">Location:</span> Singapore · Remote first</p>
              <p><span className="font-semibold text-slate-900">Open to:</span> Enterprise workshops, advisory retainers</p>
              <p><span className="font-semibold text-slate-900">Languages:</span> English, Hindi, Mandarin</p>
            </div>
          </div>
          <div className="card-surface space-y-4 p-8">
            <h2 className="text-lg font-semibold text-slate-900">Programs</h2>
            <ul className="space-y-3 text-sm text-slate-600">
              <li className="rounded-2xl border border-slate-200 px-4 py-3">Responsible AI Leadership · 8-week cohort · 96% completion</li>
              <li className="rounded-2xl border border-slate-200 px-4 py-3">Data Ethics Masterclass · On-demand course · 2.8k learners</li>
              <li className="rounded-2xl border border-slate-200 px-4 py-3">AI Readiness Playbook · Enterprise advisory track</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProfilePage
