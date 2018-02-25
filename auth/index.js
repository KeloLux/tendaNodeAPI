const jwt = require('jsonwebtoken')
const secred = 'textosecretisimo'
// Authentication middleware

const isAuth = (req, res, next) => {
  const token = req.headers['x-access-token']
  // const token = req.headers['Authorization'];
  if (!token) {
    return res.status(403).json({
      message: 'You need to provide a token to access this resource.'
    })
  }
  jwt.verify(token, secred, (err, jwtPayload) => {
    if (err) {
      return res.status(400).send({
        message: 'Authentication Error : ' + err.message
      })
    }
    userModel.findOne({ id: jwtPayload._id }, (err, user) => {
      if (err) return res.status(500).send({ message: 'Error L13: ' + err })
      next()
    })
  })
}

// =========================

// Authenticate using nick and password and respond with a JWT

const userModel = require('../components/user/user.model')

const authUser = (req, res) => {
  const nick = req.body.nick
  const password = req.body.password
  if (!nick && !password) {
    res.status(400).send({ message: 'No nick nor password provided.' })
  }
  else if (!nick) res.status(400).send({ message: 'No nick provided.' })
  else if (!password) res.status(400).send({ message: 'No password provided.' })
  else {
    userModel.findOne(
      {
        nick: nick
      },
      (err, user) => {
        if (err) throw err
        if (!user) {
          res.status(500).send({ message: 'Email does not exist.' })
        }
        else {
          user.comparePassword(password, function (err, isMatch) {
            console.log(err)
            if (isMatch && !err) {
              const token = jwt.sign(user, secred, {
                expiresIn: 10000 // in seconds
              })
              res.status(200).send({ message: token })
            }
            else {
              res.status(400).send({ message: 'Wrong password.' })
            }
          })
        }
      }
    )
  }
}

// ============================================================

module.exports = {
  isAuth: isAuth,
  authUser: authUser
}
module.exports = {
  isAuth: isAuth,
  authUser: authUser
}
module.exports = {
  isAuth: isAuth,
  authUser: authUser
}
module.exports = {
  isAuth: isAuth,
  authUser: authUser
}
