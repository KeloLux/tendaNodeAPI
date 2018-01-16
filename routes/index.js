const express = require('express');
const userCtrl = require('../controllers/user');
const productCtrl = require('../controllers/product');
const shopCtrl = require('../controllers/shop');
const router = express.Router();


router.get('/login', userCtrl.Login);
router.post('/register', userCtrl.Register);

router.get('/product', productCtrl.Get);
router.post('/product', productCtrl.Create);

router.get('/shop', shopCtrl.Get);
router.post('/shop', shopCtrl.Create);


router.get('*', (req, res) => {
    res.send({ message: 'Welcome to API v1' })
});

module.exports = router