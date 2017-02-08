import bunyan from 'bunyan';

const logger = bunyan.createLogger({
  name: 'hive',
  level: 'debug',
});

export default logger;
