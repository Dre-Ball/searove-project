const mongoose = require('mongoose');

const boatsSchema = new mongoose.Schema({
    boatName: {
        type: String,
        required: true,
    },
    boatType: {
        type: String,
        required: true,
    },
    boatLength: {
        type: Number,
        required: true,
    },
    boatPrice: {
        type: Number,
        required: true,
    },
});

// Connects boatsSchema with "boats" collection
module.exports = mongoose.model('Boat', boatsSchema);