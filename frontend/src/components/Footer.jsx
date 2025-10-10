import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="border-t border-slate-100 bg-slate-50/60">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 py-12 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-3">
          <img src="https://i.ibb.co/twQyCm1N/Edulure-Logo.png" alt="Edulure logo" className="h-8 w-auto" />
          <div>
            <p className="text-sm font-semibold text-slate-800">Edulure</p>
            <p className="text-xs text-slate-500">Learn, teach, and thrive together.</p>
          </div>
        </div>
        <div className="flex flex-wrap gap-4 text-sm text-slate-500">
          <Link to="/privacy" className="hover:text-brand">Privacy</Link>
          <Link to="/terms" className="hover:text-brand">Terms</Link>
          <Link to="/help" className="hover:text-brand">Support</Link>
          <span className="text-slate-400">© {new Date().getFullYear()} Edulure. All rights reserved.</span>
        </div>
      </div>
    </footer>
  )
}

export default Footer
