const express = require('express');

const middlewares = require('./middlewares');
const entitiesAPI = require('./entities');

const app = express();

app.use(express.json());
// app.use(middlewares.<something>)

module.exports = (db) => {
  const router = entitiesAPI(db, app);

  app.use('/v1/entities', router);

  return app;
};
