const mongoose = require('mongoose');

const boatsSchema = new mongoose.Schema({
    boatNumber: {
        type: Number,
        required: true,
    },
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
    hasLoad: {
        type: String,
        default: false,
        required: true,
    }
});

module.exports = mongoose.model('Boat', boatsSchema);