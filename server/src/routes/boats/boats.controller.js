const boats = require('../../models/boats.model');

function getAllBoats(req, res) {
    return res.status(200).json(boats);
}

module.exports = {
    getAllBoats
};