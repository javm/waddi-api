const { DataTypes } = require('sequelize');
const sequelize = require('#utils/connection.util');

const Post = sequelize.define('Post', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  title: {
    type: DataTypes.STRING
  },
  body: {
    type: DataTypes.TEXT
  }
}, {
  tableName: 'posts',
  createdAt: 'created_at',
  updatedAt: 'updated_at'
});
module.exports = Post;