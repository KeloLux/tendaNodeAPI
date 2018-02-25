const mongoose = require('mongoose')

const Schema = mongoose.Schema
const ProductSchema = new Schema({
  name: { type: String, required: true },
  // category: { type: String, enum: ['harware', 'software', 'maintenance'] },
  category: { type: String },
  description: String,
  import: {
    type: Number,
    min: [1, 'Price has to be greater or equals than 1'],
    max: 1000
  },
  tax: { type: Number, required: true },
  supplier: { type: String }
})

module.exports = mongoose.model('Product', ProductSchema)
