const ProductModel = require('./product.model')
// ============

// Creates a new product
const createProduct = (req, res) => {
  console.log(req.body)
  const email = req.body.email
  const password = req.body.password
  if (!email && !password) { res.json({ message: 'No email nor password provided.' }) }
  else if (!email) res.json({ message: 'No email provided.' })
  else if (!password) res.json({ message: 'No password provided.' })
  else {
    const newProduct = new ProductModel({
      email: email,
      password: password
    })
    newProduct.save(err => {
      if (err) return res.json({ message: 'Email already exists.' })
      res.json({ message: 'Product successfully created.' })
    })
  }
}
// ==================

// Returns a single product
const getSingleProduct = (req, res) => {
  // TODO: add logic
  console.log('getSingleProduct')
  res.status(200).send({ message: 'You said get product' })
}
// =====================

// Returns all products
const getAllProducts = (req, res) => {
  // TODO: add logic
  console.log('getAllProducts')
  res.status(200).send({ message: 'You said all products' })
}
// =====================

// Updates a product
const updateProduct = (req, res) => {
  // TODO: add logic
}
// =====================

// Deletes a product
const deleteProduct = (req, res) => {
  // TODO: add logic
}
// =====================

module.exports = {
  createProduct: createProduct,
  getSingleProduct: getSingleProduct,
  getAllProducts: getAllProducts,
  updateProduct: updateProduct,
  deleteProduct: deleteProduct
}
