const express = require('express');
const app = express();
const appRouter = require('./app.routes');
const { connect } = require('../db/db.connection');
const { logger } = require('../logging/logging.setup');

const API = 'api';

logger.info('runing the App...');

connect();
app.use(`/${API}`, appRouter);

module.exports = app;
