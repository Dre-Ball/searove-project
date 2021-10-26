const mongoose = require('mongoose');

const tripsSchema = new mongoose.Schema({
    tripNumber: {
        type: Number,
        required: true,
        default: 100
    },
    tripDate: {
        type: Date,
        required: true,
    },
    tripName: {
        type: String,
        required: true,
    },
    tripVolume: {
        type: Number,
        required: true,
    },
    tripBoat: {
        type: String,
        required: true,
    },
    customer: [],
});

// Connects tripsSchema with "trips" collection
module.exports = mongoose.model('Trip', tripsSchema);