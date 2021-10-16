const express = require('express');
const { 
    httpGetAllTrips,
    httpGetOneTrip,
    httpAddNewTrip,
    httpDeleteTrip
 } = require('./trips.controller')

const tripsRouter = express.Router();

tripsRouter.get('/', httpGetAllTrips);
tripsRouter.get('/:id', httpGetOneTrip);
tripsRouter.post('/', httpAddNewTrip);
tripsRouter.delete('/:id', httpDeleteTrip)


module.exports = tripsRouter;