const { 
    getAllLoads,
    addNewLoad,
} = require('../../models/loads.model');

function httpGetAllLoads(req, res) {
    return res.status(200).json(getAllLoads());
}

function httpAddNewLoad(req, res) {
    const load = req.body;
    load.createdDate = new Date(load.createdDate);

    addNewLoad(load);
    return res.status(201).json(load);
}

module.exports = {
    httpGetAllLoads,
    httpAddNewLoad,
}