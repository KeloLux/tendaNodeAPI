const express = require('express');
const userCtrl = require('../controllers/user');
const productCtrl = require('../controllers/product');
const shopCtrl = require('../controllers/shop');
const api = express.Router();

api.get('/login', userCtrl.Login);
api.post('/register', userCtrl.Register);

api.get('/product', productCtrl.Get);
api.post('/product', productCtrl.Create);

api.get('/shop', shopCtrl.Get);
api.post('/shop', shopCtrl.Create);


api.get('/', (req, res) => {
    res.send({ message: `Hola mundo` })
});

module.exports = api