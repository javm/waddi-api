const { DataTypes } = require('sequelize');
const sequelize = require('#utils/connection.util');

const User = sequelize.define('User', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  name: {
    type: DataTypes.STRING
  },
  email: {
    type: DataTypes.STRING
  },
  password: {
    type: DataTypes.STRING
  },
  role: {
    type: DataTypes.STRING,
    defaultValue: 'editor'
  }
}, {
  tableName: 'users',
  indexes: [
    // Create a unique index on email
    {
      unique: true,
      fields: ['email']
    }
  ],
  createdAt: 'created_at',
  updatedAt: 'updated_at'
});
module.exports = User;