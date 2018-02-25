const routes = require('express').Router()

// http://localhost:3030/api
routes.get('/', (req, res) => {
  res.send('api')
})
// http://localhost:3030/api/auth
const authUser = require('../auth').authUser
routes
  .get('/auth', (req, res) => {
    res.json({
      message: 'Send a POST request here with user credentials to authenticate.'
    })
  })
  .post('/auth', authUser)

const userRoutes = require('../components/user/user.routes')
routes.use('/users', userRoutes)

const shopRoutes = require('../components/shop/shop.routes')
routes.use('/shops', shopRoutes)

const productRoutes = require('../components/product/product.routes')
routes.use('/products', productRoutes)

module.exports = routes
