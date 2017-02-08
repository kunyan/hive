import fs from 'fs';
import path from 'path';
import Sequelize from 'sequelize';
import config from 'config';
import logger from '../logger';

const dbConfig = config.get('database');
// config.logging = logger.debug.bind(logger);

const sequelize = new Sequelize(dbConfig.database, dbConfig.username, dbConfig.password, dbConfig);
const db = {};

sequelize
  .authenticate()
  .then(() => {
    logger.debug('Connection has been established successfully.');
  })
  .catch((err) => {
    logger.debug('Unable to connect to the database:', err);
  });

fs
  .readdirSync(__dirname)
  .filter((file) => {
    const filename = 'index.js';
    return (file.indexOf('.') !== 0) && (file !== filename);
  })
  .forEach((file) => {
    const model = sequelize.import(path.join(__dirname, file));
    db[model.name] = model;
  });

Object.keys(db).forEach((modelName) => {
  if ('associate' in db[modelName]) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

export default db;
