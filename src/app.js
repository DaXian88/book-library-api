const express = require('express');
const readerController = require('./controllers/reader')
const { Reader } = require('./models')

const app = express();

app.use(express.json());

app.post('/readers', readerController.create)


module.exports = app;
