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
  console.log(token)
  jwt.verify(token, secred, (err, jwtPayload) => {
    if (err) {
      return res.json({
        message: 'Authentication Error : ' + err.message
      })
    }
    userModel.findOne({ id: jwtPayload._id }, (err, user) => {
      if (err) return res.json({ message: 'Error L13: ' + err })
      next()
    })
  })
}

// =========================

// Authenticate using email and password and respond with a JWT

const userModel = require('../components/user/user.model')

const authUser = (req, res) => {
  const email = req.body.email
  const password = req.body.password
  if (!email && !password) {
    res.json({ message: 'No email nor password provided.' })
  }
  else if (!email) res.json({ message: 'No email provided.' })
  else if (!password) res.json({ message: 'No password provided.' })
  else {
    userModel.findOne(
      {
        email: email
      },
      (err, user) => {
        if (err) throw err
        if (!user) {
          res.send({ message: 'Email does not exist.' })
        }
        else {
          user.comparePassword(password, function (err, isMatch) {
            if (isMatch && !err) {
              const token = jwt.sign(user, secred, {
                expiresIn: 10000 // in seconds
              })
              res.json({ message: token })
            }
            else {
              res.send({ message: 'Wrong password.' })
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
