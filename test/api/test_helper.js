const config = require('config');

const api = require('../../api/v1');
const dbFactory = require('../../lib/database/factory');


before(() => {
});

beforeEach(() => {
  // The following setup will help us to avoid using
  // transactions or something similar to clean the
  // database after each test.
  //
  // Even if it's an in memory database...

  db = dbFactory.create(config.database);
  app = api(db);

  return db; // This line should be database connection
});

after(() => {});
