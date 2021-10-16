const { 
    getAllBoats,
} = require('../../models/boats.model');
const { logger } = require('../../winston/winston');

async function httpGetAllBoats(req, res) {
    logger.debug('DEBUG');
    return res.status(200).json(await getAllBoats());
}

module.exports = {
    httpGetAllBoats,
};