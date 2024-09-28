const express = require('express');
const appRouter = express.Router();

const userRouters = require('../modules/user/route/user.routes');
const healthRouter = require('../modules/health/routes/health.routes');

const API_VERSION = 'v1';

appRouter.use(`/${API_VERSION}/users`,  userRouters);
appRouter.use(`/${API_VERSION}/health`,  healthRouter);


module.exports = appRouter;