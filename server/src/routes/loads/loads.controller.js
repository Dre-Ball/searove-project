const { 
    getAllLoads,
    addNewLoad,
    existsLoadWithId,
    deleteLoadById,
} = require('../../models/loads.model');

async function httpGetAllLoads(req, res) {
    return res.status(200).json(await getAllLoads());
}

async function httpAddNewLoad(req, res) {
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

    await addNewLoad(load);
    console.log(load);
    return res.status(201).json(load);
}

async function httpDeleteLoad( req, res) {
    const loadId = Number(req.params.id);

    const existsLoad = await existsLoadWithId(loadId);
    if (!existsLoad) {
        return res.status(404).json({
            error: 'Load does not exist',
        });
    }

    const deleted = await deleteLoadById(loadId);
    return res.status(200).json(deleted);
}

module.exports = {
    httpGetAllLoads,
    httpAddNewLoad,
    httpDeleteLoad,
}