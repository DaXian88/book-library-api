const express = require('express');
const readerRouter = require('./routes/reader')

const app = express();

app.use(express.json());

app.use('/readers', readerRouter);

// app.use('/reader', readerController.readAll);

// app.use('/reader/:id', readerController.readById);

// app.use('/reader/:id', readerController.update);

// app.use('/reader/:id', readerController.delete)

module.exports = app;
