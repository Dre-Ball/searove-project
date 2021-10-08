const boatsDatabase = require('./boats.mongo');

const DEFAULT_BOAT_NUMBER = 1000


const boat = {
    boatNumber: 1000,
    boatName: 'Odyssey',
    boatType: 'Cruise',
    boatLength: 360,
};

saveBoat(boat);


async function existsBoatWithId(boatId) {
    return await boatsDatabase.findOne({
        boatNumber: boatId,
    });
}

async function getLatestBoatNumber() {
    const latestBoat = await boatsDatabase
        .findOne()
        .sort('-boatNumber');

    if (!latestBoat) {
        return DEFAULT_BOAT_NUMBER;
    }

    return latestBoat.boatNumber;
};


async function getAllBoats() {
    return await boatsDatabase.find({}, {
        '_id': 0,
        '__v': 0,
    });
};

async function saveBoat(boat) {
    await boatsDatabase.findOneAndUpdate({
        boatNumber: boat.boatNumber,
    }, boat, {
        upsert: true,
    });
}

async function addNewBoat(boat) {
    const newBoatNumber = await getLatestBoatNumber() + 1;

    const newBoat = Object.assign(boat, {
        hasLoad: false,
        customers: ['Best Buy', 'Gamestop'],
        boatNumber: newBoatNumber
    });

    await saveBoat(newBoat);
};

async function deleteBoatById(boatId) {
    return await boatsDatabase.deleteOne({
        boatNumber: boatId,
    });
};


module.exports = {
    existsBoatWithId,
    getAllBoats,
    addNewBoat,
    deleteBoatById,
};