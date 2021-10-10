const loadsDatabase = require('./loads.mongo')
const boats = require('./boats.mongo');

const DEFAULT_LOAD_NUMBER = 100;

const load = {
    loadNumber: 100,
    volume: 5,
    content: 'electronics',
    customer: ['Best Buy', 'Gamestop'],
    createdDate: new Date('2022-09-01')
};

saveLoad(load);

async function findLoad(filter) {
    return await loadsDatabase.findOne(filter);
};

async function existsLoadWithId(loadId) {
    return await findLoad({
        loadNumber: loadId,
    });
};

async function getLatestLoadNumber() {
    const latestLoad = await loadsDatabase
        .findOne()
        .sort('-loadNumber');

    if (!latestLoad) {
        return DEFAULT_LOAD_NUMBER;
    }

    return latestLoad.loadNumber;
};

async function getAllLoads() {
    return await loadsDatabase.find({}, {
        '_id': 0,
        '__v': 0,
    });
};

async function saveLoad(load) {
    await loadsDatabase.findOneAndUpdate({
        loadNumber: load.loadNumber,
    }, load, {
        upsert: true,
    });
}

async function addNewLoad(load) {
    const newLoadNumber = await getLatestLoadNumber() + 1;

    const newLoad = Object.assign(load, {
        loadedOnBoat: false,
        customers: ['Best Buy', 'Gamestop'],
        loadNumber: newLoadNumber
    });

    await saveLoad(newLoad);
}

async function deleteLoadById(loadId) {
    return await loadsDatabase.deleteOne({
        loadNumber: loadId,
    });
};

module.exports = {
    findLoad,
    existsLoadWithId,
    getAllLoads,
    addNewLoad,
    deleteLoadById,
};