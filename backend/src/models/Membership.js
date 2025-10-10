import { DataTypes, Model } from 'sequelize'
import sequelize from '../config/database.js'

class Membership extends Model {}

Membership.init(
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
    communityId: {
      type: DataTypes.UUID,
      allowNull: false
    },
    role: {
      type: DataTypes.ENUM('member', 'admin', 'moderator'),
      defaultValue: 'member'
    },
    status: {
      type: DataTypes.ENUM('active', 'pending', 'banned'),
      defaultValue: 'active'
    }
  },
  {
    sequelize,
    modelName: 'Membership',
    tableName: 'memberships'
  }
)

export default Membership
