const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const ProductSchema = new Schema({
    name: { type: String, required: true },
    picture: String,
    price: {
        type: Number,
        min: [1, 'Price has to be greater or equals than 1'],
        max: 1000
    },
    category: { type: String, enum: ['harware', 'software', 'maintenance'] },
    description: String
});

module.exports = mongoose.model('Product', ProductSchema);
