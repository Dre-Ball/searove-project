const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const { morganMiddleware } = require('./morgan/morgan');
const ecsFormat = require('@elastic/ecs-morgan-format');

const boatsRouter = require('./routes/boats/boats.router');
const loadsRouter = require('./routes/loads/loads.router');

const app = express();

app.use(cors({
    origin: 'http://localhost:3000'
}));

app.use(morganMiddleware);
app.use(morgan('tiny'));

app.use(express.json());

app.use('/boats', boatsRouter);
app.use('/loads', loadsRouter);

module.exports = app;