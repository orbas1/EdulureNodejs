export async function up ({ context: queryInterface, Sequelize }) {
  await queryInterface.createTable('posts', {
    id: {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4,
      primaryKey: true
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
    author_id: {
      type: Sequelize.UUID,
      allowNull: false,
      references: {
        model: 'users',
        key: 'id'
      },
      onDelete: 'CASCADE'
    },
    content: {
      type: Sequelize.TEXT,
      allowNull: false
    },
    media_url: Sequelize.STRING,
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
  await queryInterface.dropTable('posts')
}
