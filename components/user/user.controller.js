// Dependencies
const UserModel = require('./user.model')
// ============
// login is in POST /auth
// Creates a new user
const createUser = (req, res) => {
  // console.log(req.body)
  const nick = req.body.nick
  const password = req.body.password
  if (!nick && !password) {
    res.status(400).send({ message: 'No nick nor password provided.' })
  }
  else if (!nick) res.status(400).send({ message: 'No nick provided.' })
  else if (!password) res.status(400).send({ message: 'No password provided.' })
  else {
    UserModel.create(req.body, (err, user) => {
      if (err) {
        return res.status(500).send({ message: 'Error: ' + err })
      }
      else res.status(200).send({ message: 'User successfully created.' })
    })
  }
}
// ==================

// Returns all users
const getUsers = (req, res) => {
  // TODO: add logic
  if (req.params.id) {
    UserModel.findOne({ _id: req.params.id }, (err, user) => {
      if (err) return res.status(500).send({ message: 'Error : ' + err })
      else if (!user) {
        return res.status(404).send({ message: 'User non exists.' })
      }
      else return res.status(200).send({ user: user })
    })
  }
  else {
    UserModel.find({}, (err, user) => {
      if (err) return res.status(500).send({ message: 'Error : ' + err })
      else if (!user) {
        return res.status(404).send({ message: 'User non exists.' })
      }
      else return res.status(200).send({ users: user })
    })
  }
}
// =====================

// Updates a user
const updateUser = (req, res) => {
  console.log(req.body.password)
  UserModel.findByIdAndUpdate(req.params.id, req.body, (err, user) => {
    if (err) {
      return res.status(500).send({ message: 'Email non exists.' + err })
    }
    else if (!user) {
      return res.status(404).send({ message: 'User non exists.' })
    }
    else {
      return res.status(200).send({ message: 'User update successfully.' })
    }
  })
}
// =====================

// Deletes a user
const deleteUser = (req, res) => {
  UserModel.findByIdAndRemove(req.params.id, (err, user) => {
    if (err) return res.status(500).send({ message: 'Email non exists.' + err })
    else if (!user) {
      return res.status(404).send({ message: 'User non exists.' })
    }
    else return res.status(200).send({ message: 'User delete successfully.' })
  })
  console.log('object')
}
// =====================

module.exports = {
  createUser: createUser,
  getUsers: getUsers,
  updateUser: updateUser,
  deleteUser: deleteUser
}
