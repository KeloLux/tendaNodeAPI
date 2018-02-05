const Shop = require('../models/shop.js');

function Create(req, res) {
    console.log("Create Shop");
    let shop = new Shop();
    shop.name = req.body.name;
    shop.location = req.body.location;
    var promise = shop.save(function (err, shopStored) {
        if (err)
            res.status(500).send({ message: 'Error: ' + err })
        else
            res.status(201).send()
    })
}

function Get(req, res) {
    res.send({ message: "Get Shop method" });
}



module.exports = {
    Create, Get
}