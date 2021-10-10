const express = require('express');
const { 
    httpGetAllLoads,
    httpGetOneLoad,
    httpAddNewLoad,
    httpDeleteLoad
 } = require('./loads.controller')

const loadsRouter = express.Router();

loadsRouter.get('/', httpGetAllLoads);
loadsRouter.get('/:id', httpGetOneLoad);
loadsRouter.post('/', httpAddNewLoad);
loadsRouter.delete('/:id', httpDeleteLoad)


module.exports = loadsRouter;