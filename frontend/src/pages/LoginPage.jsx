import { Link } from 'react-router-dom'
import { EnvelopeIcon, LockClosedIcon } from '@heroicons/react/24/outline'

const LoginPage = () => {
  return (
    <section className="relative flex min-h-[calc(100vh-88px)] items-center justify-center bg-gradient-to-br from-white via-slate-50 to-blue-50 px-6 py-16">
      <div className="card-surface relative z-10 grid w-full max-w-5xl grid-cols-1 overflow-hidden lg:grid-cols-2">
        <div className="hidden bg-gradient-to-br from-brand-dark via-brand to-brand-light/70 p-12 text-white lg:flex lg:flex-col lg:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brand-light">Welcome back</p>
            <h2 className="mt-6 text-3xl font-semibold">Reignite your learners today</h2>
            <p className="mt-3 text-sm text-white/70">
              Access your live classrooms, schedule drip content, and monitor learner momentum in one place.
            </p>
          </div>
          <div className="space-y-4 text-sm text-white/80">
            <p>• Enterprise SSO available for Pro & Enterprise plans</p>
            <p>• Need help? Contact success@edulure.com</p>
          </div>
        </div>
        <div className="flex flex-col gap-8 p-10">
          <div className="flex items-center gap-3">
            <img src="https://i.ibb.co/twQyCm1N/Edulure-Logo.png" alt="Edulure logo" className="h-10 w-auto" />
            <p className="text-xl font-semibold text-slate-900">Login to Edulure</p>
          </div>
          <form className="space-y-5">
            <div className="space-y-2">
              <label htmlFor="email" className="text-xs font-semibold uppercase tracking-widest text-slate-500">
                Email address
              </label>
              <div className="relative">
                <EnvelopeIcon className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
                <input
                  id="email"
                  type="email"
                  placeholder="you@company.com"
                  className="w-full rounded-2xl border border-slate-200 py-3 pl-12 pr-4 text-sm shadow-sm focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/40"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label htmlFor="password" className="text-xs font-semibold uppercase tracking-widest text-slate-500">
                Password
              </label>
              <div className="relative">
                <LockClosedIcon className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
                <input
                  id="password"
                  type="password"
                  placeholder="Enter your password"
                  className="w-full rounded-2xl border border-slate-200 py-3 pl-12 pr-4 text-sm shadow-sm focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/40"
                />
              </div>
            </div>
            <div className="space-y-3">
              <button type="submit" className="w-full rounded-full bg-brand px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-brand/30 hover:bg-brand-dark">
                Continue
              </button>
              <button type="button" className="w-full rounded-full border border-slate-200 px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-brand hover:text-brand">
                Sign in with Google
              </button>
            </div>
            <div className="space-y-3 rounded-2xl bg-slate-50 p-4 text-sm text-slate-600">
              <p>Two-factor authentication</p>
              <div className="grid gap-2 sm:grid-cols-2">
                <label className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-slate-500">
                  <input type="checkbox" className="h-4 w-4 rounded border-slate-300 text-brand focus:ring-brand" /> Email OTP
                </label>
                <label className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-slate-500">
                  <input type="checkbox" className="h-4 w-4 rounded border-slate-300 text-brand focus:ring-brand" /> Google Authenticator
                </label>
              </div>
            </div>
          </form>
          <p className="text-sm text-slate-500">
            Don&apos;t have an account?{' '}
            <Link to="/register" className="font-semibold text-brand hover:text-brand-dark">
              Create your Edulure workspace
            </Link>
          </p>
        </div>
      </div>
    </section>
  )
}

export default LoginPage
