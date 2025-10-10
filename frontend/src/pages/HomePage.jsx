import { Link } from 'react-router-dom'
import { AcademicCapIcon, UsersIcon, BookOpenIcon, ArrowRightIcon } from '@heroicons/react/24/solid'

const benefits = [
  {
    title: 'Live classrooms designed for retention',
    description:
      'Run HD streaming sessions, breakout rooms, and interactive assessments that mirror an in-person campus and keep attendance high.',
    icon: AcademicCapIcon
  },
  {
    title: 'Communities that scale support & accountability',
    description:
      'Spin up moderated discussion hubs, mastermind cohorts, and member-only resources to keep every learner connected between sessions.',
    icon: UsersIcon
  },
  {
    title: 'On-demand tutors, courses, and e-books in one hub',
    description:
      'Monetize premium libraries with instant storefronts, searchable knowledge bases, and flexible scheduling for expert tutors.',
    icon: BookOpenIcon
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
              Live classrooms · Community engine · Tutor marketplace
            </span>
            <h1 className="text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
              Build an education business with communities, on-demand tutors, and courses that convert
            </h1>
            <p className="max-w-xl text-lg text-slate-600">
              Edulure is the all-in-one learning platform for live classrooms, expert-led communities, and premium digital products. Launch a high-converting education brand, optimize for search, and deliver binge-worthy lessons without wrangling plug-ins.
            </p>
            <div className="flex flex-col items-start gap-3 sm:flex-row">
              <Link
                to="/register"
                className="rounded-full bg-brand px-8 py-3 text-sm font-semibold uppercase tracking-wide text-white shadow-lg shadow-brand/40 transition hover:-translate-y-0.5 hover:bg-brand-dark"
              >
                Launch your academy
              </Link>
              <Link
                to="/feed"
                className="flex items-center gap-2 rounded-full border border-slate-200 px-7 py-3 text-sm font-semibold text-slate-700 transition hover:border-brand hover:text-brand"
              >
                Explore the live feed
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
                <dt className="text-xs font-semibold uppercase tracking-widest text-slate-400">Courses & e-books shipped</dt>
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
          <h2 className="section-title">Everything you need to run a high-performing education community</h2>
          <p className="text-lg text-slate-600">
            Combine live classrooms, asynchronous resources, and commerce-ready catalogues under one trusted brand. Tailor journeys to learners, automate onboarding, and watch enrollment accelerate through built-in SEO and referral tools.
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
              Capture intent from course explorers, community builders, or enterprise partners. Our onboarding flows segment prospects instantly so you can personalise outreach and improve search rankings with structured data.
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

      <section id="revenue-share" className="bg-slate-50 py-24">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="section-title text-center">Only pay when you earn</h2>
          <p className="mx-auto mt-4 max-w-3xl text-center text-lg text-slate-600">
            Keep your revenue. Edulure powers your classrooms, communities, tutors, courses, and e-books for a simple 5% success fee on processed income. No hidden SaaS subscriptions, no per-seat charges—just aligned incentives to grow your education business.
          </p>
          <div className="mt-16 grid gap-8 lg:grid-cols-3">
            {[
              {
                title: 'Launch',
                description: 'Start with branded landing pages, searchable content hubs, and automated onboarding workflows in minutes.',
                highlights: ['Unlimited members and posts', 'Live classroom hosting included', 'SEO-ready landing templates']
              },
              {
                title: 'Monetize',
                description: 'Sell premium courses, e-books, and tutoring sessions with built-in checkout, upsells, and couponing.',
                highlights: ['Global payments with 5% platform fee', 'Instant tutor scheduling & payouts', 'Analytics that track cohort ROI']
              },
              {
                title: 'Scale',
                description: 'Unlock enterprise workflows, SSO, and concierge launch services as your education community expands worldwide.',
                highlights: ['Advanced automations & integrations', 'Dedicated partner success team', 'Custom data exports & SLAs']
              }
            ].map((plan) => (
              <div key={plan.title} className="card-surface flex flex-col gap-6 border-brand/10 p-8 shadow-brand/10">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-dark">{plan.title}</p>
                  <p className="mt-4 text-sm text-slate-600">{plan.description}</p>
                </div>
                <ul className="space-y-3 text-sm text-slate-600">
                  {plan.highlights.map((item) => (
                    <li key={item}>✔ {item}</li>
                  ))}
                </ul>
                <Link
                  to="/register"
                  className="mt-auto rounded-full bg-brand px-6 py-3 text-center text-sm font-semibold text-white shadow-lg shadow-brand/40 transition hover:bg-brand-dark"
                >
                  Claim your spot
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto grid max-w-6xl gap-16 px-6 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-6">
            <h2 className="section-title">SEO-optimised funnels for educators</h2>
            <p className="text-lg text-slate-600">
              Edulure landing pages are built for organic discovery. Schema markup, blazing-fast performance, and on-page SEO tools help your live classrooms, on-demand tutors, and educational resources rank on Google from day one.
            </p>
            <div className="grid gap-6 sm:grid-cols-2">
              {[{
                title: 'Schema-powered content',
                description: 'Publish course, event, and instructor pages with automatic structured data for rich snippets.'
              },
              {
                title: 'Searchable knowledge base',
                description: 'Index every lesson, e-book, and discussion to delight members and attract new learners.'
              },
              {
                title: 'Community spotlight pages',
                description: 'Showcase member success stories, curriculum breakdowns, and tutor directories with zero code.'
              },
              {
                title: 'Conversion-focused CTAs',
                description: 'Deploy pre-tested funnels, lead magnets, and nurture sequences tailored to education brands.'
              }].map((feature) => (
                <div key={feature.title} className="card-surface space-y-3 p-6">
                  <h3 className="text-lg font-semibold text-slate-900">{feature.title}</h3>
                  <p className="text-sm text-slate-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
          <aside className="card-surface space-y-6 p-8">
            <h3 className="text-xl font-semibold text-slate-900">Why educators choose Edulure</h3>
            <ul className="space-y-4 text-sm text-slate-600">
              <li><strong className="text-brand">5% aligned fee:</strong> Invest resources into better experiences instead of monthly SaaS bills.</li>
              <li><strong className="text-brand">Full-funnel analytics:</strong> Track discovery to retention across communities, classrooms, and downloads.</li>
              <li><strong className="text-brand">Global-ready infrastructure:</strong> Localised landing pages, secure payments, and multilingual support baked in.</li>
            </ul>
            <Link
              to="/register"
              className="inline-flex items-center justify-center rounded-full bg-brand px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-brand/40 transition hover:bg-brand-dark"
            >
              Schedule a walkthrough
            </Link>
          </aside>
        </div>
      </section>

      <section className="bg-slate-50 py-24">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="section-title text-center">Frequently asked questions</h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-lg text-slate-600">
            Learn how Edulure accelerates your education business with live instruction, thriving communities, and revenue-aligned pricing.
          </p>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {[
              {
                question: 'How does the 5% income share work?',
                answer:
                  'You only pay when you earn. Edulure processes payments for your courses, e-books, and tutoring sessions, then retains 5% as a platform fee. There are no monthly subscriptions or surprise invoices.'
              },
              {
                question: 'Can I host live classrooms and evergreen courses together?',
                answer:
                  'Yes. Run immersive live classrooms with interactive whiteboards while selling pre-recorded courses, downloadable resources, and e-books from the same dashboard.'
              },
              {
                question: 'How will Edulure help me grow my community?',
                answer:
                  'Community management, automated onboarding, leaderboards, and engagement analytics help you deliver value between sessions and retain members longer.'
              },
              {
                question: 'Do you support on-demand tutors and marketplaces?',
                answer:
                  'Create tutor directories, enable instant booking, and match experts with learners using filters, reviews, and direct messaging.'
              }
            ].map((faq) => (
              <div key={faq.question} className="card-surface space-y-3 p-6">
                <h3 className="text-lg font-semibold text-slate-900">{faq.question}</h3>
                <p className="text-sm text-slate-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default HomePage
