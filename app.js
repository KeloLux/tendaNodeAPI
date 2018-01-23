'use strict';
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const express = require('express');
var app = express();
var api = require('./routes');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

var router = undefined;
router = express.Router();
console.log(mongoose.connection.readyState);
if (!mongoose.connection.readyState)
    router.get('*', function(req, res) {
        res.send(`Error 500. The server is temporarily inaccessible.`);
    });
else app.use('/v1', api);

router.get('*', (req, res) => {
    res.send({ message: `404. Not found` });
});

module.exports = app;
