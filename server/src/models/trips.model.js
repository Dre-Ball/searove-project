const tripsDatabase = require('./trips.mongo')

const DEFAULT_TRIP_NUMBER = 100;

const trip = {
    tripNumber: 100,
    tripName: 'birthday celebration',
    tripVolume: 700,
    tripBoat: 'yacht',
    customer: ['owner'],
    tripDate: new Date('2022-09-01')
};

saveTrip(trip);

async function findTrip(filter) {
    return await tripsDatabase.findOne((filter), {
        '_id': 0,
        '__v': 0,        
    });
};

async function existsTripWithId(tripId) {
    return await findTrip({
        tripNumber: tripId,
    });
};

async function getLatestTripNumber() {
    const latestTrip = await tripsDatabase
        .findOne()
        .sort('-tripNumber');

    if (!latestTrip) {
        return DEFAULT_TRIP_NUMBER;
    }

    return latestTrip.tripNumber;
};

async function getAllTrips(auth) {
    return await tripsDatabase.find({ customer: `${auth.uid}` }, {
        '_id': 0,
        '__v': 0,
    });
};

async function saveTrip(trip) {
    await tripsDatabase.findOneAndUpdate({
        tripNumber: trip.tripNumber,
    }, trip, {
        upsert: true,
    });
}

async function addNewTrip(trip, auth) {
    const newTripNumber = await getLatestTripNumber() + 1;
    console.log(auth)

    const newTrip = Object.assign(trip, {
        customer: [auth.uid],
        tripNumber: newTripNumber,
    });

    await saveTrip(newTrip);
}

async function deleteTripById(tripId) {
    return await tripsDatabase.deleteOne({
        tripNumber: tripId,
    });
};

module.exports = {
    findTrip,
    existsTripWithId,
    getAllTrips,
    addNewTrip,
    deleteTripById,
};