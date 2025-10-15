export async function up ({ context: queryInterface }) {
  await Promise.all([
    queryInterface.addIndex('users', ['created_at'], {
      name: 'users_created_at_idx'
    }),
    queryInterface.addIndex('users', ['updated_at'], {
      name: 'users_updated_at_idx'
    }),
    queryInterface.addIndex('posts', ['created_at'], {
      name: 'posts_created_at_idx'
    }),
    queryInterface.addIndex('memberships', ['updated_at'], {
      name: 'memberships_updated_at_idx'
    })
  ])
}

export async function down ({ context: queryInterface }) {
  await Promise.all([
    queryInterface.removeIndex('users', 'users_created_at_idx'),
    queryInterface.removeIndex('users', 'users_updated_at_idx'),
    queryInterface.removeIndex('posts', 'posts_created_at_idx'),
    queryInterface.removeIndex('memberships', 'memberships_updated_at_idx')
  ])
}
