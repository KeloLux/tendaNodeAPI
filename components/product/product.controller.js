const ProductModel = require('./product.model')
// ============

// Creates a new product
const createProduct = (req, res) => {
  console.log(req.body)
  const email = req.body.email
  const password = req.body.password
  const newProduct = new ProductModel({
    email: email,
    password: password
  })
  newProduct.save(err => {
    if (err) return res.json({ message: 'Product already exists.' })
    res.json({ message: 'Product successfully created.' })
  })
}
// ==================

// Returns all products
const getProducts = (req, res) => {
  // TODO: add logic
  if (req.params.id) {
    ProductModel.findOne({ email: req.params.id }, (err, product) => {
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
  ProductModel.findOneAndUpdate(
    { email: req.params.id },
    req.body,
    (err, product) => {
      if (err) {
        return res.status(500).send({ message: 'Product non exists.' + err })
      }
      else {
        return res.status(200).send({ message: 'Product update successfully.' })
      }
    }
  )
}
// =====================

// Deletes a product
const deleteProduct = (req, res) => {
  ProductModel.findOneAndUpdate({ email: req.params.id }, (err, product) => {
    if (err) {
      return res.status(500).send({ message: 'Product non exists.' + err })
    }
    else {
      return res.status(200).send({ message: 'Product delete successfully.' })
    }
  })
}
// =====================

module.exports = {
  createProduct: createProduct,
  getProducts: getProducts,
  updateProduct: updateProduct,
  deleteProduct: deleteProduct
}
