'use strict'
var express = require('express');
var app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.get('/login/:user_name', (req, res) => {
    rss.send({
        message: `Hola ${req.params.user_name}`
    })
});

module.exports = app