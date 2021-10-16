const fs = require('fs');
const path = require('path');
const parse = require('csv-parse');

const boatsDatabase = require('./boats.mongo');

function isBoatAvailable(boat) {
    return boat['under_construction'] == 'FALSE'
        && boat['boat_price'] > 100; 
}

function loadBoatsData() {
    return new Promise((resolve, reject) => {
        fs.createReadStream(path.join(__dirname, '..', '..', 'data', 'boats_preinventory.csv'))
        .pipe(parse({
            columns: true,
        }))
        .on('data', async (data) => {
            if (isBoatAvailable(data)) {
                // insert + update = upsert
                saveBoat(data);
            }
        })
        .on('error', (err) => {
            console.log(err);
            reject(err);
        })
        .on('end', async () => {
            const countBoatsFound = (await getAllBoats()).length;
            console.log(`${countBoatsFound} boats ready for use!`);
            resolve();
        });
    })
}

async function getAllBoats() {
    return await boatsDatabase.find({}, {
        '_id': 0,
        '__v': 0,
    });
};

async function saveBoat(boat) {
    try {
        await boatsDatabase.updateOne({
            boatName: boat.boat_name,
            boatType: boat.boat_type,
            boatLength: boat.boat_length,
            boatPrice: boat.boat_price,
        }, {
            boatName: boat.boat_name,
            boatType: boat.boat_type,
            boatLength: boat.boat_length,
            boatPrice: boat.boat_price,
        }, {
            upsert: true,
        });
    } catch(err) {
        console.error(`${err}: Boat not saved`);
    }
}

module.exports = {
    loadBoatsData,
    getAllBoats,
};