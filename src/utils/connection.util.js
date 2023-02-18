const { Sequelize } = require('sequelize');
const config = require('#config/database.config');

const sequelize = new Sequelize(config.database, config.username, config.password, {
  host: config.host,
  dialect: 'postgres',
  operatorsAliases: 'false',
  logging: false
});

module.exports = sequelize