const express = require('express');

const {
    httpGetAllBoats,
} = require('./boats.controller');

const boatsRouter = express.Router();

boatsRouter.get('/', httpGetAllBoats);


module.exports = boatsRouter;