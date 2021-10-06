const fs = require('fs');
const path = require('path');
const morgan = require('morgan');
const { logger } = require('../winston/winston');
const ecsFormat = require('@elastic/ecs-morgan-format');

let accessLogStream = fs.createWriteStream(path.join(__dirname, '..', '..', 'logs', 'http.json'), { flags: 'a' })

const morganMiddleware = morgan(ecsFormat({ format: 'combined' }), { 
    // specify a function for skipping requests without errors
    // skip: (req, res) => res.statusCode < 400,
    // specify a stream for requests logging
    stream: accessLogStream
});

module.exports = {
    morganMiddleware,
};