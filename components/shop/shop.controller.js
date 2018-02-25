const ShopModel = require('./shop.model')
// ============

// Creates a new shop
const createShop = (req, res) => {
  ShopModel.create(req.body, (err, user) => {
    if (err) return res.json({ message: 'Shop already exists.' })
    res.json({ message: 'Shop successfully created.' })
  })
}
// ==================

// Returns all shops
const getShops = (req, res) => {
  // TODO: add logic
  if (req.params.id) {
    ShopModel.findOne({ _id: req.params.id }, (err, shop) => {
      if (err) return res.status(500).send({ message: 'Error : ' + err })
      else return res.status(200).send({ shop: shop })
    })
  }
  else {
    ShopModel.find({}, (err, shop) => {
      if (err) return res.status(500).send({ message: 'Error : ' + err })
      else return res.status(200).send({ shops: shop })
    })
  }
}
// =====================

// Updates a shop
const updateShop = (req, res) => {
  ShopModel.findByIdAndUpdate(req.params.id, req.body, (err, shop) => {
    if (err) return res.status(500).send({ message: 'Shop non exists.' + err })
    else return res.status(200).send({ message: 'Shop update successfully.' })
  })
}
// =====================

// Deletes a shop
const deleteShop = (req, res) => {
  ShopModel.findByIdAndRemove(req.params.id, (err, shop) => {
    if (err) return res.status(500).send({ message: 'Shop non exists.' + err })
    else return res.status(200).send({ message: 'Shop delete successfully.' })
  })
}
// =====================

module.exports = {
  createShop: createShop,
  getShops: getShops,
  updateShop: updateShop,
  deleteShop: deleteShop
}
