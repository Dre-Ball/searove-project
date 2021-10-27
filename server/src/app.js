const path = require('path');
const express = require('express');
// security feature
//const helmet = require('helmet');
const cors = require('cors');
const morgan = require('morgan');
const { morganMiddleware } = require('./morgan/morgan');
const decodeIDToken = require('./authenticateToken');

const api = require('./routes/api');

const app = express();

//app.use(helmet());

app.use(cors({
    origin: 'http://localhost:3000'
}));

app.use(decodeIDToken);

app.use(morganMiddleware);
app.use(morgan('tiny'));

app.use(express.json());
app.use(express.static(path.join(__dirname, '..', 'public')));

app.use('/v1', api);

app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'public', 'index.html'));
  });

module.exports = app;