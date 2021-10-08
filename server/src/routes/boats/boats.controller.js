const { 
    getAllBoats,
    addNewBoat,
    existsBoatWithId,
    deleteBoatById,
} = require('../../models/boats.model');
const { logger } = require('../../winston/winston');

async function httpGetAllBoats(req, res) {
    logger.debug('DEBUG');
    return res.status(200).json(await getAllBoats());
}

async function httpAddNewBoat(req, res) {
    const boat = req.body;

    if (!boat.name || !boat.type || !boat.length) {
        return res.status(400).json({
            error: 'Missing required properties'
        });
    }

    await addNewBoat(boat);
    console.log(boat);
    return res.status(201).json(boat);
}

async function httpDeleteBoat( req, res ) {
    const boatId = Number(req.params.id);

    const existBoat = await existsBoatWithId(boatId);
    if (!existsLoad) {
        res.status(404).json({
            error: 'Load does not exists',
        });

        return logger.error('Something went wrong!');
    }

    const deleted = await deleteBoatById(boatId);
    return res.status(200).json(deleted);
}

module.exports = {
    httpGetAllBoats,
    httpAddNewBoat,
    httpDeleteBoat,
};