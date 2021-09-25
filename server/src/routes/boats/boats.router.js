const express = require('express');

const {
    getAllBoats
} = require('./boats.controller');

const boatsRouter = express.Router();

boatsRouter.get('/boats', getAllBoats);


module.exports = boatsRouter;