const express = require('express');
const userCtrl = require('../controllers/user');
const productCtrl = require('../controllers/product');
const shopCtrl = require('../controllers/shop');
const router = express.Router();

router.post('/login', userCtrl.Login);
//router.get('/user/:userId', userCtrl.Get);
router.post('/register', userCtrl.Register);
//router.delete('/user/:userId', userCtrl);
//router.put('/user/:userId', userCtrl);

router.get('/product/:productId', productCtrl.Get);
router.post('/product', productCtrl.Create);
//router.delete('/product/:productId', productCtrl);
//router.put('/product/:productId', productCtrl);

router.get('/shop/:shopId', shopCtrl.Get);
router.post('/shop', shopCtrl.Create);
//router.delete('/shop/:shopId', shop);
//router.put('/shop/:shopId', shop);

router.get('*', (req, res) => {
    res.send({ message: 'Welcome to API v1' });
});

module.exports = router;
