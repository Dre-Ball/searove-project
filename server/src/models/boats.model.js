const boats = require('./boats.mongo');

async function getAllBoats() {
    return await boats.find({}, {
        '_id': 0,
        '__v': 0,
    });
}

module.exports = {
    getAllBoats,
};