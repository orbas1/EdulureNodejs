export async function up ({ context: queryInterface, Sequelize }) {
  await queryInterface.createTable('users', {
    id: {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4,
      primaryKey: true
    },
    email: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true
    },
    password_hash: {
      type: Sequelize.STRING,
      allowNull: false
    },
    role: {
      type: Sequelize.ENUM('user', 'instructor', 'admin'),
      defaultValue: 'user'
    },
    two_factor_email: {
      type: Sequelize.BOOLEAN,
      defaultValue: false
    },
    two_factor_google: {
      type: Sequelize.BOOLEAN,
      defaultValue: false
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
  await queryInterface.dropTable('users')
}
