import { DataTypes, Model } from 'sequelize'
import sequelize from '../config/database.js'

class Profile extends Model {}

Profile.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    userId: {
      type: DataTypes.UUID,
      allowNull: false
    },
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    headline: DataTypes.STRING,
    bio: DataTypes.TEXT,
    avatarUrl: DataTypes.STRING,
    location: DataTypes.STRING,
    intent: {
      type: DataTypes.JSON,
      defaultValue: []
    }
  },
  {
    sequelize,
    modelName: 'Profile',
    tableName: 'profiles'
  }
)

export default Profile
