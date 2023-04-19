const mongoose = require('mongoose');
const { REQUIRED_FIELD } = require('../config/errorMessages');

const ProductSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, REQUIRED_FIELD],
  },
  price: {
    type: Number,
    required: [true, REQUIRED_FIELD],
  },
  photo: {
    type: String,
    required: [true, REQUIRED_FIELD],
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: [true, REQUIRED_FIELD],
  },
  boughtBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    default: null,
  },
});

const Product = mongoose.model('Product', ProductSchema);
module.exports = Product;