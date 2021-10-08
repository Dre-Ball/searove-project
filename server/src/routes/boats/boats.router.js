const express = require('express');

const {
    httpGetAllBoats,
    httpAddNewBoat,
    httpDeleteBoat,
} = require('./boats.controller');

const boatsRouter = express.Router();

boatsRouter.get('/', httpGetAllBoats);
boatsRouter.get('/', httpAddNewBoat)
boatsRouter.post('/:id', httpDeleteBoat)


module.exports = boatsRouter;