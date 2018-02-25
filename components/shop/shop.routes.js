/*
 * @file Defines the shop routes and connects them with the appropriate controller.
 * @author John Char <yannosx@gmail.com>
 */

// Dependencies
const shopRoutes = require('express').Router()
const isAuth = require('../../auth').isAuth
const shopController = require('./shop.controller')
// =============

// Connecting shop routes to shop controllers
shopRoutes
  .post('/', isAuth, shopController.createShop) // creates a new shop
  .get('/:id?', isAuth, shopController.getShops) // returns a single shop or all shops
  .put('/:id', isAuth, shopController.updateShop) // updates a single shop
  .delete('/:id', isAuth, shopController.deleteShop) // deletes a signle shop
// ==========================================

module.exports = shopRoutes
