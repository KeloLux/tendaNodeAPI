/*
 * @file Defines the product routes and connects them with the appropriate controller.
 * @author John Char <yannosx@gmail.com>
 */

// Dependencies
const productRoutes = require('express').Router()
const isAuth = require('../../auth').isAuth
const productController = require('./product.controller')
// =============

// Connecting product routes to product controllers
productRoutes
  .post('/', productController.createProduct) // creates a new product
  .get('/:id?', isAuth, productController.getProducts) // returns a single product or all
  .put('/:id', isAuth, productController.updateProduct) // updates a single product
  .delete('/:id', isAuth, productController.deleteProduct) // deletes a signle product
// ==========================================

module.exports = productRoutes
