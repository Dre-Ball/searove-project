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
<<<<<<< HEAD

app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'public', 'index.html'));
  });

=======
app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'public', 'index.html'));
  });
  
>>>>>>> df8d43e22b4fea6c179a438aa5c783cd5cf03eb6
module.exports = app;