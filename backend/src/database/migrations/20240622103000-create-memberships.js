export async function up ({ context: queryInterface, Sequelize }) {
  await queryInterface.createTable('memberships', {
    id: {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4,
      primaryKey: true
    },
    user_id: {
      type: Sequelize.UUID,
      allowNull: false,
      references: {
        model: 'users',
        key: 'id'
      },
      onDelete: 'CASCADE'
    },
    community_id: {
      type: Sequelize.UUID,
      allowNull: false,
      references: {
        model: 'communities',
        key: 'id'
      },
      onDelete: 'CASCADE'
    },
    role: {
      type: Sequelize.ENUM('member', 'admin', 'moderator'),
      defaultValue: 'member'
    },
    status: {
      type: Sequelize.ENUM('active', 'pending', 'banned'),
      defaultValue: 'active'
    },
    created_at: {
      type: Sequelize.DATE,
      defaultValue: Sequelize.fn('NOW')
    },
    updated_at: {
      type: Sequelize.DATE,
      defaultValue: Sequelize.fn('NOW')
    }
  })
}

export async function down ({ context: queryInterface }) {
  await queryInterface.dropTable('memberships')
}
