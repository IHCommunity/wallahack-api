const Product = require('../models/Product.model');
const createError = require('http-errors');

module.exports.create = (req, res, next) => {
  if (req.file) {
    req.body.photo = req.file.path
  }

  const { name, price, photo } = req.body;

  console.log('req.currentUserId', req.currentUserId)
  // aquí ira lo delos archivos

  Product.create({ name, price, owner: req.currentUserId, photo })
    .then(product => res.status(201).json(product))
    .catch(next);
}

module.exports.list = (req, res, next) => {
  Product.find()
    .then(products => res.json(products))
    .catch(next)
}

module.exports.buy = (req, res, next) => {
  const { id } = req.params
  console.log('id', id)
  Product.findByIdAndUpdate(id, { boughtBy: req.currentUserId }, { new: true })
    .then(product => res.json(product))
    .catch(next)
}


module.exports.detail = (req, res, next) => {
  const { id } = req.params

  Product.findById(id)
    .then(product => res.json(product))
    .catch(next)
}