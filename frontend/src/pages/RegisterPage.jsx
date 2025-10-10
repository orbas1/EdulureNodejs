import { Link } from 'react-router-dom'

const intentions = ['Launch courses', 'Build a community', 'Offer video lessons', 'Run live cohorts', 'Host tutoring sessions']

const RegisterPage = () => {
  return (
    <section className="bg-gradient-to-b from-white via-slate-50 to-blue-50 py-20">
      <div className="mx-auto max-w-5xl px-6">
        <div className="card-surface overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="bg-gradient-to-br from-brand-dark via-brand to-brand-light/70 p-12 text-white">
              <img src="https://i.ibb.co/twQyCm1N/Edulure-Logo.png" alt="Edulure logo" className="h-12 w-auto" />
              <h2 className="mt-10 text-3xl font-semibold">Create your Edulure workspace</h2>
              <p className="mt-3 text-sm text-white/80">
                Bring your courses, community, and operations into one unified platform built to scale with you.
              </p>
              <ul className="mt-10 space-y-4 text-sm text-white/80">
                <li>✔ Unified dashboard for courses, communities, and cohorts</li>
                <li>✔ Built-in analytics, automations, and messaging</li>
                <li>✔ 24/7 priority support for growth and enterprise teams</li>
              </ul>
            </div>
            <div className="p-10">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-dark">Founder onboarding</p>
              <h3 className="mt-4 text-2xl font-semibold text-slate-900">Tell us about your vision</h3>
              <form className="mt-8 grid gap-6">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="firstName" className="text-xs font-semibold uppercase tracking-widest text-slate-500">
                      First name
                    </label>
                    <input
                      id="firstName"
                      type="text"
                      placeholder="Jordan"
                      className="mt-2 w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm shadow-sm focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/40"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="text-xs font-semibold uppercase tracking-widest text-slate-500">
                      Last name
                    </label>
                    <input
                      id="lastName"
                      type="text"
                      placeholder="Lee"
                      className="mt-2 w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm shadow-sm focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/40"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="text-xs font-semibold uppercase tracking-widest text-slate-500">
                    Work email
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="you@school.com"
                    className="mt-2 w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm shadow-sm focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/40"
                  />
                </div>
                <div>
                  <label htmlFor="password" className="text-xs font-semibold uppercase tracking-widest text-slate-500">
                    Create password
                  </label>
                  <input
                    id="password"
                    type="password"
                    placeholder="Minimum 8 characters"
                    className="mt-2 w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm shadow-sm focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/40"
                  />
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="address" className="text-xs font-semibold uppercase tracking-widest text-slate-500">
                      Headquarters location
                    </label>
                    <input
                      id="address"
                      type="text"
                      placeholder="San Francisco, CA"
                      className="mt-2 w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm shadow-sm focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/40"
                    />
                  </div>
                  <div>
                    <label htmlFor="age" className="text-xs font-semibold uppercase tracking-widest text-slate-500">
                      Team size
                    </label>
                    <input
                      id="age"
                      type="number"
                      placeholder="12"
                      className="mt-2 w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm shadow-sm focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/40"
                    />
                  </div>
                </div>
                <div>
                  <label className="text-xs font-semibold uppercase tracking-widest text-slate-500">
                    What will you build on Edulure?
                  </label>
                  <div className="mt-3 grid gap-3 sm:grid-cols-2">
                    {intentions.map((intention) => (
                      <label key={intention} className="flex items-center gap-3 rounded-2xl border border-slate-200 px-4 py-3 text-sm text-slate-600 shadow-sm transition hover:border-brand">
                        <input type="checkbox" className="h-4 w-4 rounded border-slate-300 text-brand focus:ring-brand" />
                        {intention}
                      </label>
                    ))}
                  </div>
                </div>
                <button type="submit" className="w-full rounded-full bg-brand px-6 py-3 text-sm font-semibold uppercase tracking-wide text-white shadow-lg shadow-brand/30 hover:bg-brand-dark">
                  Create workspace
                </button>
              </form>
              <p className="mt-6 text-sm text-slate-500">
                Already have an account?{' '}
                <Link to="/login" className="font-semibold text-brand hover:text-brand-dark">
                  Log in
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default RegisterPage
