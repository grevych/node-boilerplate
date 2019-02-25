const MemoryDatabase = require('./memory');
const errors = require('./errors');

function create(dbConfig) {
  let database = null;

  switch (dbConfig.driver) {
    case 'memory':
      database = new MemoryDatabase(dbConfig);
  }

  if (!database) {
    throw new errors.UnsupportedDatabaseDriver(dbConfig.driver);
  }

  return database;
}


module.exports = {
  create,
};
