const Article = require('../models/article.js');

function Create() {
    let article = new Article();
    article.name = req.body.name
    article.picture = req.body.picture
    article.price = req.body.price
    article.category = req.body.category
    article.description = req.body.description

    article.save((err, articleStored) => {
        if (err)
            res.status(500).send({ message: 'Error: ' + err })
        else
            res.status(201).send()
    })
}

function Get(req, res) {
    res.send({ message: "get" });
}

module.exports = {
    Create, Get
}