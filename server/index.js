const express = require('express');
const parser = require('body-parser');
const mongoose = require('mongoose');
const reviewRouter = require('./reviewRouter.js');
mongoose.connect('mongodb://localhost:27017/reviews');
const app = express();

const port = 3004;

app.use(express.static(__dirname + '/../public'));
app.use(parser.json());
app.use('/api/products', reviewRouter);

app.listen(port, () => console.log(`Listening on port ${port}`));
