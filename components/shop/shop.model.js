const mongoose = require('mongoose')

const Schema = mongoose.Schema
const ShopSchema = new Schema({
  name: String,
  location: String
})

module.exports = mongoose.model('Shop', ShopSchema)
