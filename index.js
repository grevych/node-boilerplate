require('dotenv').config()
const config = require('config');

const api = require('./api/v1');
const databaseFactory = require('./lib/database/factory');

const db = databaseFactory.create(config.database);
api(config.api, db);
console.log("Boilerplate API listening on ", config.api.port);
