const express = require('express');

const boatsRouter = require('./boats/boats.router');
const tripsRouter = require('./trips/trips.router');

const api = express.Router();

api.use('/boats', boatsRouter);
api.use('/trips', tripsRouter);

module.exports = api;