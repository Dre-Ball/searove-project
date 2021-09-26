const express = require('express');
const { 
    httpGetAllLoads,
    httpAddNewLoad,
 } = require('./loads.controller')

const loadsRouter = express.Router();

loadsRouter.get('/', httpGetAllLoads);
loadsRouter.post('/', httpAddNewLoad);


module.exports = loadsRouter;