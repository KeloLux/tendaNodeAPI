const Product = require('../models/product.js');

exports.Create = function (req, res) {
    console.log("Create Product");
    let product = new Product();
    product.name = req.body.name
    product.picture = req.body.picture
    product.price = req.body.price
    product.category = req.body.category
    product.description = req.body.description

    product.save((err, productStored) => {
        if (err)
            res.status(500).send({ message: 'Error: ' + err })
        else
            res.status(201).send()
    })
}

exports.Get = function (req, res) {
    res.send({ message: "Get Product method" });
}
