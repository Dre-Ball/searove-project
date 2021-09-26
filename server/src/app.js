const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

const boatsRouter = require('./routes/boats/boats.router')
const loadsRouter = require('./routes/loads/loads.router')

const app = express();

app.use(cors({
    origin: 'http://localhost:3000'
}));
app.use(morgan('combined'));

app.use(express.json());
app.use('/boats', boatsRouter);
app.use('/loads', loadsRouter);

module.exports = app;