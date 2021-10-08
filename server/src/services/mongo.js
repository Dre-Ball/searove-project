const mongoose = require('mongoose');

const MONGO_URL = 'mongodb+srv://searove-api:9IrXTKBSC1ZmfFJC@searovecluster.cg7ox.mongodb.net/searove?retryWrites=true&w=majority'

// event emitter, that emits events when ready
mongoose.connection.once('open', () => {
    console.log('MongoDB connection is ready!');
});

// for errors
mongoose.connection.on('error', (err) => {
    console.error(err);
})

async function mongoConnect() {
    await mongoose.connect(MONGO_URL);
}

async function mongoDisconnect() {
    await mongoose.disconnect();
}

module.exports = {
    mongoConnect,
    mongoDisconnect,
}