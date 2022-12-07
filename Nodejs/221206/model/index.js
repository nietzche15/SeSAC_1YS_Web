const Sequelize = require('sequelize');
const config = require('../config/config.json')['development'];

const db = {};

const sequelize = new Sequelize(
    config.database,
    config.username,
    config.password,
    config
);

db.sequelize = sequelize;
db.Sequeslize = Sequelize;

db.Student = require('./Student')( sequelize, Sequelize );

module.exports = db;