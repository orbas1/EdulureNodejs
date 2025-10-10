import meiliClient from '../config/meili.js'

export async function ensureIndexes () {
  const indexes = await meiliClient.getIndexes()
  const existing = indexes.results.map((index) => index.uid)
  const required = ['communities', 'posts', 'users']
  for (const uid of required) {
    if (!existing.includes(uid)) {
      await meiliClient.createIndex(uid, { primaryKey: 'id' })
    }
  }
}

export async function searchAll (query) {
  const [communities, posts, users] = await Promise.all([
    meiliClient.index('communities').search(query),
    meiliClient.index('posts').search(query),
    meiliClient.index('users').search(query)
  ])
  return { communities: communities.hits, posts: posts.hits, users: users.hits }
}
