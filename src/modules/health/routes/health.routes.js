const express = require('express');
const healthRouter = express.Router();

const healthController = require('../controller/health.controllers');

healthRouter.get('/', healthController.healthListCtrl);

module.exports = healthRouter;

