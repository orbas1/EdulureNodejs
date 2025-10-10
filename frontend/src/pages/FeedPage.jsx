import { useMemo, useState } from 'react'
import { MagnifyingGlassIcon, BellIcon, ChatBubbleOvalLeftIcon } from '@heroicons/react/24/outline'
import { ChevronDownIcon } from '@heroicons/react/24/solid'
import { posts, communities, leaderboard } from '../data/communities'
import clsx from 'clsx'

const menuStates = {
  all: ['Communities', 'Classrooms', 'E-Books', 'Tutors', 'Dashboard'],
  community: ['Community', 'Classroom', 'Calendar', 'Members', 'Map', 'Leaderboards', 'About']
}

const FeedPage = () => {
  const [selectedCommunity, setSelectedCommunity] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')

  const activeMenuItems = useMemo(() => menuStates[selectedCommunity === 'all' ? 'all' : 'community'], [selectedCommunity])

  return (
    <section className="bg-slate-50 py-10">
      <div className="mx-auto max-w-6xl space-y-6 px-4 sm:px-6">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex flex-wrap items-center gap-4">
            <div className="relative">
              <button className="inline-flex items-center gap-3 rounded-full border border-slate-200 bg-white px-5 py-2 text-sm font-semibold text-slate-700 shadow-sm">
                <span>{selectedCommunity === 'all' ? 'All Communities' : communities.find((c) => c.id === selectedCommunity)?.name}</span>
                <ChevronDownIcon className="h-4 w-4 text-slate-400" />
              </button>
              <div className="mt-2 flex gap-2">
                <button
                  onClick={() => setSelectedCommunity('all')}
                  className={clsx('rounded-full px-3 py-1 text-xs font-semibold transition', selectedCommunity === 'all' ? 'bg-brand text-white' : 'bg-white text-slate-600 shadow')}
                >
                  All
                </button>
                {communities.map((community) => (
                  <button
                    key={community.id}
                    onClick={() => setSelectedCommunity(community.id)}
                    className={clsx('rounded-full px-3 py-1 text-xs font-semibold transition', selectedCommunity === community.id ? 'bg-brand text-white' : 'bg-white text-slate-600 shadow')}
                  >
                    {community.name.split(' ')[0]}
                  </button>
                ))}
              </div>
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-3 rounded-full border border-slate-200 bg-white px-5 py-2 shadow-sm">
                <MagnifyingGlassIcon className="h-5 w-5 text-slate-400" />
                <input
                  value={searchQuery}
                  onChange={(event) => setSearchQuery(event.target.value)}
                  placeholder="Search with Meilisearch across people, posts, and resources"
                  className="w-full bg-transparent text-sm text-slate-600 focus:outline-none"
                />
              </div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <button className="rounded-full border border-slate-200 bg-white p-3 text-slate-500 shadow-sm hover:text-brand">
              <ChatBubbleOvalLeftIcon className="h-5 w-5" />
            </button>
            <button className="rounded-full border border-slate-200 bg-white p-3 text-slate-500 shadow-sm hover:text-brand">
              <BellIcon className="h-5 w-5" />
            </button>
            <div className="h-12 w-12 rounded-full border-2 border-brand bg-[url('https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=200&q=80')] bg-cover bg-center" />
          </div>
        </div>

        <div className="overflow-x-auto">
          <div className="flex items-center gap-4">
            {activeMenuItems.map((item) => (
              <button
                key={item}
                className="rounded-full bg-white px-5 py-2 text-sm font-semibold text-slate-600 shadow-sm transition hover:-translate-y-0.5 hover:text-brand"
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        <div className="grid gap-8 lg:grid-cols-[minmax(0,2fr),minmax(0,1fr)]">
          <div className="space-y-6">
            <div className="card-surface flex items-center gap-3 px-6 py-4">
              <div className="h-12 w-12 rounded-full border-2 border-brand bg-[url('https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80')] bg-cover bg-center" />
              <div className="flex-1">
                <div className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-500">
                  Share something brilliant with your community...
                </div>
              </div>
              <button className="rounded-full bg-brand px-4 py-2 text-sm font-semibold text-white">Post</button>
            </div>
            <div className="space-y-4">
              {posts.map((post) => (
                <article key={post.id} className="card-surface space-y-4 p-6">
                  <div className="flex items-center gap-4">
                    <img src={post.avatar} alt={post.author} className="h-12 w-12 rounded-full object-cover" />
                    <div>
                      <p className="text-sm font-semibold text-slate-900">{post.author}</p>
                      <p className="text-xs uppercase tracking-widest text-slate-400">{post.role}</p>
                    </div>
                    <span className="ml-auto text-xs font-medium uppercase tracking-widest text-slate-400">{post.timestamp}</span>
                  </div>
                  <p className="text-sm leading-relaxed text-slate-600">{post.content}</p>
                  <button className="text-sm font-semibold text-brand">Discuss →</button>
                </article>
              ))}
            </div>
          </div>
          <aside className="space-y-6">
            <div className="card-surface overflow-hidden">
              <div className="h-40 bg-cover bg-center" style={{ backgroundImage: `url(${selectedCommunity === 'all' ? communities[0].image : communities.find((c) => c.id === selectedCommunity)?.image})` }} />
              <div className="space-y-4 p-6">
                <div>
                  <h3 className="text-xl font-semibold text-slate-900">
                    {selectedCommunity === 'all' ? 'Choose a community' : communities.find((c) => c.id === selectedCommunity)?.name}
                  </h3>
                  <p className="text-sm text-slate-500">
                    {selectedCommunity === 'all'
                      ? 'Explore thriving communities curated for builders, instructors, and learners alike.'
                      : communities.find((c) => c.id === selectedCommunity)?.description}
                  </p>
                </div>
                <dl className="grid grid-cols-3 gap-4 text-center text-xs font-semibold uppercase tracking-widest text-slate-400">
                  <div>
                    <dt>Members</dt>
                    <dd className="mt-1 text-base text-slate-900">
                      {selectedCommunity === 'all'
                        ? '—'
                        : communities.find((c) => c.id === selectedCommunity)?.members.toLocaleString()}
                    </dd>
                  </div>
                  <div>
                    <dt>Online</dt>
                    <dd className="mt-1 text-base text-slate-900">
                      {selectedCommunity === 'all'
                        ? '—'
                        : communities.find((c) => c.id === selectedCommunity)?.online}
                    </dd>
                  </div>
                  <div>
                    <dt>Admins</dt>
                    <dd className="mt-1 text-base text-slate-900">
                      {selectedCommunity === 'all'
                        ? '—'
                        : communities.find((c) => c.id === selectedCommunity)?.admins}
                    </dd>
                  </div>
                </dl>
                <button className="w-full rounded-full bg-brand px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-brand/30 hover:bg-brand-dark">
                  Invite people
                </button>
              </div>
            </div>
            <div className="card-surface space-y-4 p-6">
              <h4 className="text-sm font-semibold uppercase tracking-widest text-slate-500">Leaderboard</h4>
              <ul className="space-y-3">
                {leaderboard.map((entry, index) => (
                  <li key={entry.id} className="flex items-center justify-between rounded-2xl bg-slate-50 px-4 py-3 text-sm text-slate-600">
                    <span className="font-semibold text-slate-900">#{index + 1} {entry.name}</span>
                    <span className="text-brand">{entry.points} pts</span>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </section>
  )
}

export default FeedPage
