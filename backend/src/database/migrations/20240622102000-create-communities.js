export async function up ({ context: queryInterface, Sequelize }) {
  await queryInterface.createTable('communities', {
    id: {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4,
      primaryKey: true
    },
    title: {
      type: Sequelize.STRING,
      allowNull: false
    },
    slug: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true
    },
    description: Sequelize.TEXT,
    image_url: Sequelize.STRING,
    visibility: {
      type: Sequelize.ENUM('public', 'private'),
      defaultValue: 'public'
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
  await queryInterface.dropTable('communities')
}
