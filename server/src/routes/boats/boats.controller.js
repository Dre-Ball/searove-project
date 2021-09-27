const { getAllBoats} = require('../../models/boats.model');

async function httpGetAllBoats(req, res) {
    return res.status(200).json(await getAllBoats());
}

module.exports = {
    httpGetAllBoats,
};