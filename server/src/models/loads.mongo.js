const mongoose = require('mongoose');

const loadsSchema = new mongoose.Schema({
    loadNumber: {
        type: Number,
        required: true,
        default: 100
    },
    createdDate: {
        type: Date,
        required: true,
    },
    volume: {
        type: Number,
        required: true,
    },
    content: {
        type: String,
        required: true,
    },
    customers: [ String ],
    loadedOnBoat: {
        type: String,
        required: true,
        default: false,
    }
});

// Connects loadsSchema with "loads" collection
module.exports = mongoose.model('Load', loadsSchema);