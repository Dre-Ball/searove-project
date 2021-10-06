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
    customers: [ String ],
    hasLoad: {
        type: Boolean,
        default: false,
        required: true,
    }
});

// Connects boatsSchema with "boats" collection
module.exports = mongoose.model('Boat', boatsSchema);