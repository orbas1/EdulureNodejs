import { LockClosedIcon } from '@heroicons/react/24/outline'

const AdminLoginPage = () => {
  return (
    <section className="flex min-h-[calc(100vh-88px)] items-center justify-center bg-gradient-to-br from-slate-900 via-brand-dark to-brand px-6 py-16">
      <div className="card-surface w-full max-w-lg space-y-6 bg-white/95 p-10">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand/10 text-brand">
            <LockClosedIcon className="h-6 w-6" />
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-dark">Admin access</p>
            <h1 className="text-2xl font-semibold text-slate-900">Edulure Command Center</h1>
          </div>
        </div>
        <p className="text-sm text-slate-600">
          Sign in to manage platform-wide settings, approve instructors, and oversee community health metrics.
        </p>
        <form className="space-y-4">
          <div>
            <label htmlFor="email" className="text-xs font-semibold uppercase tracking-widest text-slate-500">
              Admin email
            </label>
            <input
              id="email"
              type="email"
              placeholder="admin@edulure.com"
              className="mt-2 w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm shadow-sm focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/40"
            />
          </div>
          <div>
            <label htmlFor="password" className="text-xs font-semibold uppercase tracking-widest text-slate-500">
              Passphrase
            </label>
            <input
              id="password"
              type="password"
              placeholder="Enter secure passphrase"
              className="mt-2 w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm shadow-sm focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/40"
            />
          </div>
          <button type="submit" className="w-full rounded-full bg-brand px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-brand/40 hover:bg-brand-dark">
            Enter admin panel
          </button>
        </form>
        <p className="text-xs text-slate-400">
          Protected by enterprise-grade security. Contact platform security for urgent assistance.
        </p>
      </div>
    </section>
  )
}

export default AdminLoginPage
