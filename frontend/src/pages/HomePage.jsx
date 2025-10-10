import { Link } from 'react-router-dom'
import { CheckCircleIcon, PlayCircleIcon, ArrowRightIcon } from '@heroicons/react/24/solid'

const benefits = [
  {
    title: 'Communities that create momentum',
    description: 'Launch thriving communities with asynchronous hubs, live classrooms, and gamified leaderboards that keep learners engaged.',
    icon: CheckCircleIcon
  },
  {
    title: 'High-trust instruction at scale',
    description: 'Deliver premium multi-format courses, track outcomes, and automate onboarding for every cohort, worldwide.',
    icon: PlayCircleIcon
  },
  {
    title: 'Insights that unlock growth',
    description: 'AI-powered search, analytics, and messaging let you know exactly what moves learners forward.',
    icon: ArrowRightIcon
  }
]

const partnerLogos = ['Notion', 'Figma', 'Coursera', 'Slack', 'Zapier']

const HomePage = () => {
  return (
    <div className="bg-white">
      <section className="gradient-hero">
        <div className="mx-auto flex max-w-6xl flex-col gap-12 px-6 py-24 lg:flex-row lg:items-center">
          <div className="flex-1 space-y-8">
            <span className="inline-flex items-center gap-2 rounded-full border border-brand/20 bg-brand/5 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-brand">
              Enterprise-ready learning OS
            </span>
            <h1 className="text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
              Build transformational learning communities without the busywork
            </h1>
            <p className="max-w-xl text-lg text-slate-600">
              Edulure gives modern educators, operators, and creators the operating system to launch high-impact cohorts, masterclass communities, and mentoring marketplaces—all in one place.
            </p>
            <div className="flex flex-col items-start gap-3 sm:flex-row">
              <Link
                to="/register"
                className="rounded-full bg-brand px-8 py-3 text-sm font-semibold uppercase tracking-wide text-white shadow-lg shadow-brand/40 transition hover:-translate-y-0.5 hover:bg-brand-dark"
              >
                Start free trial
              </Link>
              <Link
                to="/feed"
                className="flex items-center gap-2 rounded-full border border-slate-200 px-7 py-3 text-sm font-semibold text-slate-700 transition hover:border-brand hover:text-brand"
              >
                View live platform
                <ArrowRightIcon className="h-4 w-4" />
              </Link>
            </div>
            <dl className="grid grid-cols-2 gap-6 text-left sm:grid-cols-4">
              <div>
                <dt className="text-xs font-semibold uppercase tracking-widest text-slate-400">Communities launched</dt>
                <dd className="text-3xl font-semibold text-slate-900">2.3k</dd>
              </div>
              <div>
                <dt className="text-xs font-semibold uppercase tracking-widest text-slate-400">Avg. learner NPS</dt>
                <dd className="text-3xl font-semibold text-slate-900">68</dd>
              </div>
              <div>
                <dt className="text-xs font-semibold uppercase tracking-widest text-slate-400">Courses shipped</dt>
                <dd className="text-3xl font-semibold text-slate-900">18k+</dd>
              </div>
              <div>
                <dt className="text-xs font-semibold uppercase tracking-widest text-slate-400">Retention lift</dt>
                <dd className="text-3xl font-semibold text-slate-900">42%</dd>
              </div>
            </dl>
          </div>
          <div className="flex flex-1 items-center justify-center">
            <div className="card-surface relative w-full max-w-md overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?auto=format&fit=crop&w=900&q=80"
                alt="Live class preview"
                className="h-72 w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/0 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 space-y-3 p-6 text-white">
                <p className="text-xs uppercase tracking-widest text-brand-light">Live Cohort in session</p>
                <p className="text-lg font-semibold">Designing community-first digital campuses</p>
                <p className="text-sm text-slate-200">1.2k members connected · 96% completion rate</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-slate-100 bg-white py-12">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-6 px-6 text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">
          {partnerLogos.map((logo) => (
            <span key={logo}>{logo}</span>
          ))}
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-12 px-6 py-24 lg:grid-cols-2">
        <div className="space-y-6">
          <h2 className="section-title">Everything you need to run a high-performing academy</h2>
          <p className="text-lg text-slate-600">
            Combine live classrooms, asynchronous resources, and community engagement under one brand. Tailor journeys to learners, automate onboarding, and watch engagement accelerate.
          </p>
          <ul className="space-y-4">
            {benefits.map((benefit) => (
              <li key={benefit.title} className="card-surface flex items-start gap-4 p-6">
                <span className="rounded-2xl bg-brand/10 p-3 text-brand">
                  <benefit.icon className="h-6 w-6" />
                </span>
                <div>
                  <p className="text-lg font-semibold text-slate-900">{benefit.title}</p>
                  <p className="text-sm text-slate-600">{benefit.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="card-surface space-y-8 p-10">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-dark">Lead capture</p>
            <h3 className="mt-4 text-2xl font-semibold text-slate-900">Turn interest into enrollment</h3>
            <p className="mt-3 text-sm text-slate-600">
              Capture intent from course explorers, community builders, or enterprise partners. Our onboarding flows segment prospects instantly so you can personalize outreach.
            </p>
          </div>
          <form className="space-y-4">
            <div>
              <label htmlFor="company" className="block text-xs font-semibold uppercase tracking-widest text-slate-500">
                Company or School
              </label>
              <input
                id="company"
                type="text"
                placeholder="Acme Learning Co."
                className="mt-2 w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm shadow-sm focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/40"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-xs font-semibold uppercase tracking-widest text-slate-500">
                Work email
              </label>
              <input
                id="email"
                type="email"
                placeholder="hello@edulure.com"
                className="mt-2 w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm shadow-sm focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/40"
              />
            </div>
            <div>
              <label htmlFor="audience" className="block text-xs font-semibold uppercase tracking-widest text-slate-500">
                Primary goal
              </label>
              <select
                id="audience"
                className="mt-2 w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm shadow-sm focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/40"
              >
                <option>Launch a flagship community</option>
                <option>Scale instructor-led courses</option>
                <option>Build an expert marketplace</option>
              </select>
            </div>
            <button type="submit" className="w-full rounded-full bg-brand px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-brand/40 hover:bg-brand-dark">
              Book a strategy session
            </button>
          </form>
        </div>
      </section>

      <section id="pricing" className="bg-slate-50 py-24">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="section-title text-center">Flexible plans for teams of every size</h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-lg text-slate-600">
            Start free, upgrade when you are ready to unlock advanced automation, enterprise security, and concierge onboarding.
          </p>
          <div className="mt-16 grid gap-8 lg:grid-cols-3">
            {["Starter", "Growth", "Enterprise"].map((plan, index) => (
              <div key={plan} className={`card-surface flex flex-col gap-6 p-8 ${index === 1 ? 'border-brand/40 shadow-2xl shadow-brand/20' : ''}`}>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-dark">{plan}</p>
                  <p className="mt-4 text-3xl font-semibold text-slate-900">{index === 0 ? '$0' : index === 1 ? '$249' : 'Let\'s talk'}</p>
                  <p className="text-sm text-slate-500">{index === 0 ? 'Kickstart your first community with essential tools.' : index === 1 ? 'Scale with automation, advanced analytics, and onboarding.' : 'Dedicated success team, SSO, and custom deployments.'}</p>
                </div>
                <ul className="space-y-3 text-sm text-slate-600">
                  <li>✔ Unlimited members & posts</li>
                  <li>✔ Interactive classrooms & events</li>
                  <li>✔ Advanced analytics dashboard</li>
                  {index > 0 && <li>✔ Automation and workflow builder</li>}
                  {index === 2 && <li>✔ Dedicated CSM & premium support</li>}
                </ul>
                <Link
                  to={index === 2 ? '/contact' : '/register'}
                  className={`mt-auto rounded-full px-6 py-3 text-center text-sm font-semibold transition ${index === 1 ? 'bg-brand text-white shadow-lg shadow-brand/40 hover:bg-brand-dark' : 'border border-slate-200 text-slate-700 hover:border-brand hover:text-brand'}`}
                >
                  {index === 2 ? 'Connect with sales' : 'Start now'}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default HomePage
