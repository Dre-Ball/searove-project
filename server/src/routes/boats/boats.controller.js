const { getAllBoats} = require('../../models/boats.model');

function httpGetAllBoats(req, res) {
    return res.status(200).json(getAllBoats());
}

module.exports = {
    httpGetAllBoats,
};