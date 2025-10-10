export async function up ({ context: queryInterface, Sequelize }) {
  await queryInterface.createTable('profiles', {
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
    first_name: Sequelize.STRING,
    last_name: Sequelize.STRING,
    headline: Sequelize.STRING,
    bio: Sequelize.TEXT,
    avatar_url: Sequelize.STRING,
    location: Sequelize.STRING,
    intent: Sequelize.JSON,
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
  await queryInterface.dropTable('profiles')
}
