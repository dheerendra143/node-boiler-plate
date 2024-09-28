const express = require('express');
const app = express();
const appRouter = require('./app.routes');
const API = 'api';

app.use(`/${API}`, appRouter);

module.exports = app;
