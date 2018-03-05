/*
 * @file Defines the user routes and connects them with the appropriate controller.
 * @author John Char <yannosx@gmail.com>
 */

// Dependencies
const userRoutes = require('express').Router()
const isAuth = require('../../auth').isAuth
const userController = require('./user.controller')
// =============

userRoutes
  .post('/', isAuth, userController.createUser) // creates a new user
  .get('/:id?', isAuth, userController.getUsers) // returns a single user or all
  .put('/:id', isAuth, userController.updateUser) // updates a single user
  .delete('/:id', isAuth, userController.deleteUser) // deletes a signle user
// ==========================================

module.exports = userRoutes
