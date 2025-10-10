import sequelize from '../config/database.js'
import User from './User.js'
import Profile from './Profile.js'
import Community from './Community.js'
import Post from './Post.js'
import Membership from './Membership.js'

User.hasOne(Profile, { foreignKey: 'userId', as: 'profile' })
Profile.belongsTo(User, { foreignKey: 'userId' })

User.belongsToMany(Community, { through: Membership, foreignKey: 'userId', as: 'communities' })
Community.belongsToMany(User, { through: Membership, foreignKey: 'communityId', as: 'members' })

Community.hasMany(Post, { foreignKey: 'communityId', as: 'posts' })
Post.belongsTo(Community, { foreignKey: 'communityId', as: 'community' })

User.hasMany(Post, { foreignKey: 'authorId', as: 'authoredPosts' })
Post.belongsTo(User, { foreignKey: 'authorId', as: 'author' })

export { sequelize, User, Profile, Community, Post, Membership }
