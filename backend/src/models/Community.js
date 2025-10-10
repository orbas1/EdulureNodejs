import { DataTypes, Model } from 'sequelize'
import sequelize from '../config/database.js'

class Community extends Model {}

Community.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    slug: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false
    },
    description: DataTypes.TEXT,
    imageUrl: DataTypes.STRING,
    visibility: {
      type: DataTypes.ENUM('public', 'private'),
      defaultValue: 'public'
    }
  },
  {
    sequelize,
    modelName: 'Community',
    tableName: 'communities'
  }
)

export default Community
