'use strict'
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const express = require('express')
var app = express()
// var api = require('./routes')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// var router = express.Router();
console.log(mongoose.connection.readyState)

// Connect API routes to "/api" prefix
const routes = require('./routes')

app.use('/api', routes)

app.use('*', (req, res) => {
  res.status(404).send({ message: 'not found' })
})
module.exports = app
