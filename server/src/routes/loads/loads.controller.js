const { 
    getAllLoads,
    addNewLoad,
    existsLoadWithId,
    deleteLoadById,
} = require('../../models/loads.model');

function httpGetAllLoads(req, res) {
    return res.status(200).json(getAllLoads());
}

function httpAddNewLoad(req, res) {
    const load = req.body;

    if (!load.volume || !load.content || !load.createdDate){
        return res.status(400).json({
            error: 'Missing required properties'
        });
    }

    load.createdDate = new Date(load.createdDate);
    if (isNaN(load.createdDate)) {
        return res.status(400).json({
            error: 'Invalid created date',
        });
    }

    addNewLoad(load);
    return res.status(201).json(load);
}

function httpDeleteLoad( req, res) {
    const loadId = Number(req.params.id);

    if (!existsLoadWithId(loadId)) {
        return res.status(404).json({
            error: 'Load does not exist',
        });
    }

    deleteLoadById(loadId);
    return res.status(200).json({
        error: 'Load removed'
    });
}

module.exports = {
    httpGetAllLoads,
    httpAddNewLoad,
    httpDeleteLoad,
}