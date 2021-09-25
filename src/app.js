const express = require('express');
const readerController = require('./controllers/reader')


const app = express();

app.use(express.json());

app.post('/readers', readerController.create);

app.get('/reader', readerController.readAll);

app.get('/reader/:id', readerController.readById);

app.patch('/reader/:id', readerController.update)

module.exports = app;
