// Dependencies
const UserModel = require('./user.model')
// ============

// Creates a new user
const createUser = (req, res) => {
  console.log(req.body)
  const email = req.body.email
  const password = req.body.password
  if (!email && !password) {
    res.status(400).send({ message: 'No email nor password provided.' })
  }
  else if (!email) res.status(400).send({ message: 'No email provided.' })
  else if (!password) res.status(400).send({ message: 'No password provided.' })
  else {
    const newUser = new UserModel({
      email: email,
      password: password
    })
    newUser.save(err => {
      if (err) return res.status(500).send({ message: 'Email already exists.' })
      res.status(200).send({ message: 'User successfully created.' })
    })
  }
}
// ==================

// Returns all users
const getUsers = (req, res) => {
  // TODO: add logic
  if (req.params.id) {
    UserModel.findOne({ email: req.params.id }, (err, user) => {
      if (err) return res.status(500).send({ message: 'Error : ' + err })
      else return res.status(200).send({ user: user })
    })
  }
  else {
    UserModel.find({}, (err, user) => {
      if (err) return res.status(500).send({ message: 'Error : ' + err })
      else return res.status(200).send({ users: user })
    })
  }
}
// =====================

// Updates a user
const updateUser = (req, res) => {
  UserModel.findOneAndUpdate(
    { email: req.params.id },
    req.body,
    (err, user) => {
      if (err) {
        return res.status(500).send({ message: 'Email non exists.' + err })
      }
      else {
        return res.status(200).send({ message: 'User update successfully.' })
      }
    }
  )
}
// =====================

// Deletes a user
const deleteUser = (req, res) => {
  UserModel.findOneAndUpdate({ email: req.params.id }, (err, user) => {
    if (err) return res.status(500).send({ message: 'Email non exists.' + err })
    else return res.status(200).send({ message: 'User delete successfully.' })
  })
}
// =====================

module.exports = {
  createUser: createUser,
  getUsers: getUsers,
  updateUser: updateUser,
  deleteUser: deleteUser
}
