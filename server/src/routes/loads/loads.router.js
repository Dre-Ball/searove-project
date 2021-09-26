const express = require('express');
const { 
    httpGetAllLoads,
    httpAddNewLoad,
    httpDeleteLoad
 } = require('./loads.controller')

const loadsRouter = express.Router();

loadsRouter.get('/', httpGetAllLoads);
loadsRouter.post('/', httpAddNewLoad);
loadsRouter.delete('/:id', httpDeleteLoad)


module.exports = loadsRouter;