const { 
    findTrip,
    existsTripWithId,
    getAllTrips,
    addNewTrip,
    deleteTripById,
} = require('../../models/trips.model');
const { logger } = require('../../winston/winston');

async function httpGetAllTrips(req, res) {
    const auth = req.currentUser;
    logger.debug('DEBUG');

    if (auth) {
        return res.status(200).json(await getAllTrips(auth));
    } else {
        return res.status(403).json({
            error: 'NOT AUTHORIZED',
        })
    }
}

async function httpGetOneTrip(req, res) {
    const tripId = Number(req.params.id);

    const existsTrip = await existsTripWithId(tripId);
    if (!existsTrip) {
        res.status(404).json({
            error: 'Trip does not exist',
        });
    }

    return res.status(200).json(await findTrip({
        tripNumber: tripId,
    }));
}

async function httpAddNewTrip(req, res) {
    const trip = req.body;
    const auth = req.currentUser;
    
    if (auth) {
        console.log('AUTHENTICATED!');

        if (!trip.tripName || !trip.tripVolume || !trip.tripBoat || !trip.tripDate){
            return res.status(400).json({
                error: 'Missing required properties'
            });
        }
    
        trip.tripDate = new Date(trip.tripDate);
        if (isNaN(trip.tripDate)) {
            return res.status(400).json({
                error: 'Invalid trip date',
            });
        }
    
        await addNewTrip(trip, auth);
        console.log(trip);
        return res.status(201).json(trip);

    } else {
        return res.status(403).json({
            error: 'NOT AUTHORIZED',
        })
    }
}

async function httpDeleteTrip( req, res ) {
    const tripId = Number(req.params.id);

    const existsTrip = await existsTripWithId(tripId);
    if (!existsTrip) {
            res.status(404).json({
            error: 'Trip does not exist',
        });

        return logger.error('Something went wrong!');
    }

    const deleted = await deleteTripById(tripId);
    return res.status(200).json(deleted);
}

module.exports = {
    httpGetAllTrips,
    httpGetOneTrip,
    httpAddNewTrip,
    httpDeleteTrip,
}