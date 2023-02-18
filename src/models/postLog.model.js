const { DataTypes } = require('sequelize');
const sequelize = require('#utils/connection.util');
const PostLog = sequelize.define('PostLog', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  action: {
    type: DataTypes.STRING
  },
  user_id: {
    type: DataTypes.INTEGER,
    references: {
      model: 'users',
      key: 'id'
    }
  },
  post_id: {
    type: DataTypes.INTEGER,
    references: {
      model: 'posts',
      key: 'id'
    }
  }
}, {
  tableName: 'post_logs',
  createdAt: 'created_at',
  updatedAt: 'updated_at'
});
module.exports = PostLog;