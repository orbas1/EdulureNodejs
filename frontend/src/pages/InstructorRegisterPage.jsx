const niches = ['STEM', 'Design', 'Leadership', 'Product', 'Marketing', 'Creative Arts']

const InstructorRegisterPage = () => {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-10 lg:grid-cols-[1fr,1.2fr]">
          <div className="space-y-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-brand/20 bg-brand/5 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-brand">
              Become an instructor
            </span>
            <h2 className="text-4xl font-semibold text-slate-900">Scale your expertise to premium communities</h2>
            <p className="text-lg text-slate-600">
              Partner with Edulure to reach curated communities, launch high-retention cohorts, and monetize your expertise with concierge support from our learning strategists.
            </p>
            <ul className="space-y-3 text-sm text-slate-600">
              <li>✔ Co-create curriculum with our instructional design team</li>
              <li>✔ Access to verified communities seeking your expertise</li>
              <li>✔ Launch playbooks, marketing ops, and analytics included</li>
            </ul>
          </div>
          <form className="card-surface grid gap-6 p-10">
            <div>
              <label htmlFor="fullName" className="text-xs font-semibold uppercase tracking-widest text-slate-500">
                Full name
              </label>
              <input
                id="fullName"
                type="text"
                placeholder="Amelia Carter"
                className="mt-2 w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm shadow-sm focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/40"
              />
            </div>
            <div>
              <label htmlFor="email" className="text-xs font-semibold uppercase tracking-widest text-slate-500">
                Email address
              </label>
              <input
                id="email"
                type="email"
                placeholder="amelia@studio.com"
                className="mt-2 w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm shadow-sm focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/40"
              />
            </div>
            <div>
              <label htmlFor="portfolio" className="text-xs font-semibold uppercase tracking-widest text-slate-500">
                Portfolio or website
              </label>
              <input
                id="portfolio"
                type="url"
                placeholder="https://yourstudio.com"
                className="mt-2 w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm shadow-sm focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/40"
              />
            </div>
            <div>
              <label htmlFor="niche" className="text-xs font-semibold uppercase tracking-widest text-slate-500">
                Expertise focus
              </label>
              <select
                id="niche"
                className="mt-2 w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm shadow-sm focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/40"
              >
                {niches.map((niche) => (
                  <option key={niche}>{niche}</option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="audience" className="text-xs font-semibold uppercase tracking-widest text-slate-500">
                Ideal audience size
              </label>
              <input
                id="audience"
                type="number"
                placeholder="500"
                className="mt-2 w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm shadow-sm focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/40"
              />
            </div>
            <div>
              <label htmlFor="format" className="text-xs font-semibold uppercase tracking-widest text-slate-500">
                Preferred teaching format
              </label>
              <textarea
                id="format"
                rows="3"
                placeholder="Live cohorts, async courses, mentorship, etc."
                className="mt-2 w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm shadow-sm focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/40"
              />
            </div>
            <button type="submit" className="w-full rounded-full bg-brand px-6 py-3 text-sm font-semibold uppercase tracking-wide text-white shadow-lg shadow-brand/30 hover:bg-brand-dark">
              Apply to teach
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default InstructorRegisterPage
