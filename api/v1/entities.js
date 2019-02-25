const express = require('express');

module.exports = (db, _app) => {
  const router = express.Router();

  router.get('/', (req, res) => {
    let entities;

    try {
      entities = db.entities.all();
    } catch (error) {
      res.status(500).send(error);
    }

    res.send(entities);
  });

  return router;
}
