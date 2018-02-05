'use strict';
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const express = require('express');
var app = express();
var api = require('./routes');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

var router = express.Router();
console.log(mongoose.connection.readyState);

// Connect API routes to "/api" prefix
const routes = require('./routes');
app.use('/api', routes);

/*
if (!mongoose.connection.readyState)
    router.get('*', function(req, res) {
        res.send(`Error 500. The server is temporarily inaccessible.`);
    });
else app.use('/v1', api);
*/
module.exports = app;
