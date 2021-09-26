const http = require('http');
const mongoose = require('mongoose');

const app = require('./app');

const PORT = process.env.PORT || 8080;

const MONGO_URL = 'mongodb+srv://searove-api:9IrXTKBSC1ZmfFJC@searovecluster.cg7ox.mongodb.net/searove?retryWrites=true&w=majority'

const server = http.createServer(app);

// event emitter, that emits events when ready
mongoose.connection.once('open', () => {
    console.log('MongoDB connection is ready!');
});

// for errors
mongoose.connection.on('error', (err) => {
    console.error(err);
})

async function startServer() {
    await mongoose.connect(MONGO_URL);

    server.listen(PORT, () => {
        console.log(`Listening on port ${PORT}...`);
    });
}

startServer();