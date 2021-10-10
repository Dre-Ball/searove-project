const express = require('express');
// security feature
const helmet = require('helmet');
const cors = require('cors');
const morgan = require('morgan');
const { morganMiddleware } = require('./morgan/morgan');

const api = require('./routes/api');

const app = express();

app.use(helmet());

app.use(cors({
    origin: 'http://localhost:3000'
}));

app.use(morganMiddleware);
app.use(morgan('tiny'));

app.use(express.json());

app.use('/v1', api);

module.exports = app;