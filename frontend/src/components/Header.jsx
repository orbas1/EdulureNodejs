import { Fragment } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Menu, Transition } from '@headlessui/react'
import { Bars3Icon } from '@heroicons/react/24/outline'

const navigation = [
  { name: 'Home', to: '/' },
  { name: 'Communities', to: '/feed' },
  { name: 'Courses', to: '/search?type=courses' },
  { name: 'Tutors', to: '/search?type=tutors' },
  { name: 'Analytics', to: '/admin/analytics', badge: 'NEW' },
  { name: 'Pricing', to: '/#revenue-share' }
]

const Header = () => {
  const location = useLocation()

  return (
    <header className="border-b border-slate-100 bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/70 sticky top-0 z-30">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-4">
        <Link to="/" className="flex items-center gap-3">
          <img src="https://i.ibb.co/twQyCm1N/Edulure-Logo.png" alt="Edulure" className="h-16 w-auto" />
        </Link>

        <nav className="hidden items-center gap-6 text-sm font-medium text-slate-600 lg:flex">
          {navigation.map((item) => (
            <NavLink
              key={item.name}
              to={item.to}
              className={({ isActive }) =>
                `transition-colors hover:text-brand ${isActive || location.pathname === item.to ? 'text-brand font-semibold' : ''}`
              }
            >
              <span className="flex items-center gap-2">
                {item.name}
                {item.badge && (
                  <span className="inline-flex items-center rounded-full bg-sky-100 px-2 py-0.5 text-[10px] font-semibold uppercase text-sky-600">
                    {item.badge}
                  </span>
                )}
              </span>
            </NavLink>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Link to="/login" className="rounded-full border border-slate-200 px-4 py-2 text-sm font-medium text-slate-700 hover:border-brand hover:text-brand">
            Log in
          </Link>
          <Link to="/register" className="rounded-full bg-brand px-5 py-2 text-sm font-semibold text-white shadow-lg shadow-brand/30 hover:bg-brand-dark">
            Get Started
          </Link>
        </div>

        <Menu as="div" className="relative inline-block text-left lg:hidden">
          <Menu.Button className="inline-flex items-center justify-center rounded-full border border-slate-200 p-2 text-slate-600 shadow-sm">
            <Bars3Icon className="h-5 w-5" />
          </Menu.Button>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="absolute right-0 mt-2 w-60 origin-top-right divide-y divide-slate-100 overflow-hidden rounded-2xl bg-white shadow-xl ring-1 ring-black/5">
              <div className="p-2">
                {navigation.map((item) => (
                  <Menu.Item key={item.name}>
                    {({ active }) => (
                      <Link
                        to={item.to}
                        className={`${active ? 'bg-slate-50 text-brand' : 'text-slate-700'} block rounded-xl px-4 py-2 text-sm font-medium`}
                      >
                        <span className="flex items-center gap-2">
                          {item.name}
                          {item.badge && (
                            <span className="inline-flex items-center rounded-full bg-sky-100 px-2 py-0.5 text-[10px] font-semibold uppercase text-sky-600">
                              {item.badge}
                            </span>
                          )}
                        </span>
                      </Link>
                    )}
                  </Menu.Item>
                ))}
              </div>
              <div className="flex flex-col gap-2 p-3">
                <Link
                  to="/login"
                  className="rounded-full border border-slate-200 px-4 py-2 text-center text-sm font-medium text-slate-700"
                >
                  Log in
                </Link>
                <Link
                  to="/register"
                  className="rounded-full bg-brand px-5 py-2 text-center text-sm font-semibold text-white"
                >
                  Get Started
                </Link>
              </div>
            </Menu.Items>
          </Transition>
        </Menu>
      </div>
    </header>
  )
}

export default Header
