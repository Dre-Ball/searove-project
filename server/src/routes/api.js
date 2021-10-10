const express = require('express');

const boatsRouter = require('./boats/boats.router');
const loadsRouter = require('./loads/loads.router');

const api = express.Router();

api.use('/boats', boatsRouter);
api.use('/loads', loadsRouter);

module.exports = api;