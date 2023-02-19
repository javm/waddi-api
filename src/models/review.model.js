const { DataTypes } = require('sequelize');
const sequelize = require('#utils/connection.util');
const Review = sequelize.define('Review', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  content: {
    type: DataTypes.TEXT
  },
  raiting: {
    type: DataTypes.INTEGER
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
  tableName: 'reviews',
  createdAt: 'created_at',
  updatedAt: 'updated_at'
});
module.exports = Review;