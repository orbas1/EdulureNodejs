import { DataTypes, Model } from 'sequelize'
import sequelize from '../config/database.js'

class Post extends Model {}

Post.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    communityId: {
      type: DataTypes.UUID,
      allowNull: false
    },
    authorId: {
      type: DataTypes.UUID,
      allowNull: false
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    mediaUrl: DataTypes.STRING
  },
  {
    sequelize,
    modelName: 'Post',
    tableName: 'posts'
  }
)

export default Post
