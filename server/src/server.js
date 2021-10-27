const http = require('http');
require('dotenv').config();

const app = require('./app');
const { mongoConnect } = require('./services/mongo');
const { loadBoatsData } = require('./models/boats.model');

const PORT = process.env.PORT || 9000;

const server = http.createServer(app);

async function startServer() {
    await mongoConnect();   
    await loadBoatsData();

    server.listen(PORT, () => {
        console.log(`Listening on port ${PORT}...`);
    });
}

startServer();