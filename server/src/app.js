const express = require('express');

const boatsRouter = require('./routes/boats/boats.router')

const app = express();
app.use(express.json());
app.use(boatsRouter);

module.exports = app;