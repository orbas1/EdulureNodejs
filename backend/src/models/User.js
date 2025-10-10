import { DataTypes, Model } from 'sequelize'
import sequelize from '../config/database.js'

class User extends Model {}

User.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true
      }
    },
    passwordHash: {
      type: DataTypes.STRING,
      allowNull: false
    },
    role: {
      type: DataTypes.ENUM('user', 'instructor', 'admin'),
      defaultValue: 'user'
    },
    twoFactorEmail: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    twoFactorGoogle: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    }
  },
  {
    sequelize,
    modelName: 'User',
    tableName: 'users'
  }
)

export default User
