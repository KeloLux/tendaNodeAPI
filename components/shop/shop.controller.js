const ShopModel = require('./shop.model')
// ============

// Creates a new shop
const createShop = (req, res) => {
  console.log(req.body)
  const email = req.body.email
  const password = req.body.password
  if (!email && !password) { res.json({ message: 'No email nor password provided.' }) }
  else if (!email) res.json({ message: 'No email provided.' })
  else if (!password) res.json({ message: 'No password provided.' })
  else {
    const newShop = new ShopModel({
      email: email,
      password: password
    })
    newShop.save(err => {
      if (err) return res.json({ message: 'Email already exists.' })
      res.json({ message: 'Shop successfully created.' })
    })
  }
}
// ==================

// Returns a single shop
const getSingleShop = (req, res) => {
  // TODO: add logic
  console.log('getSingleShop')
  res.status(200).send({ message: 'You said get shop' })
}
// =====================

// Returns all shops
const getAllShops = (req, res) => {
  // TODO: add logic
  console.log('getAllShops')
  res.status(200).send({ message: 'You said all shops' })
}
// =====================

// Updates a shop
const updateShop = (req, res) => {
  // TODO: add logic
}
// =====================

// Deletes a shop
const deleteShop = (req, res) => {
  // TODO: add logic
}
// =====================

module.exports = {
  createShop: createShop,
  getSingleShop: getSingleShop,
  getAllShops: getAllShops,
  updateShop: updateShop,
  deleteShop: deleteShop
}
