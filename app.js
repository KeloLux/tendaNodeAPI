'use strict'
const express = require('express');
const bodyParser = require('body-parser');
var app = express();
var api = require('./routes');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/v1', api);

module.exports = app