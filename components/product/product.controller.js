const ProductModel = require('./product.model')
// ============

// Creates a new product
const createProduct = (req, res) => {
  ProductModel.create(req.body, (err, user) => {
    if (err) return res.json({ message: 'Product already exists.' })
    res.json({ message: 'Product successfully created.' })
  })
}
// ==================

// Returns all products
const getProducts = (req, res) => {
  // TODO: add logic
  if (req.params.id) {
    ProductModel.findOne({ _id: req.params.id }, (err, product) => {
      if (err) return res.status(500).send({ message: 'Error : ' + err })
      else return res.status(200).send({ product: product })
    })
  }
  else {
    ProductModel.find({}, (err, product) => {
      if (err) return res.status(500).send({ message: 'Error : ' + err })
      else return res.status(200).send({ products: product })
    })
  }
}
// =====================

// Updates a product
const updateProduct = (req, res) => {
  ProductModel.findByIdAndUpdate(req.params.id, req.body, (err, product) => {
    if (err) {
      return res.status(500).send({ message: 'Product non exists.' + err })
    }
    else {
      return res.status(200).send({ message: 'Product update successfully.' })
    }
  })
}
// =====================

// Deletes a product
const deleteProduct = (req, res) => {
  ProductModel.findByIdAndRemove(req.params.id, (err, product) => {
    if (err) { return res.status(500).send({ message: 'Product non exists.' + err }) }
    else { return res.status(200).send({ message: 'Product delete successfully.' }) }
  })
}
// =====================

module.exports = {
  createProduct: createProduct,
  getProducts: getProducts,
  updateProduct: updateProduct,
  deleteProduct: deleteProduct
}
