const mongoose = require('mongoose')
const bcrypt = require('bcrypt-nodejs')

const userSchema = new mongoose.Schema({
  nick: {
    type: String,
    lowercase: true,
    unique: true,
    required: true
  },
  email: {
    type: String,
    lowercase: true,
    unique: true,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  document: {
    type: String,
    required: true
  },
  name: { type: String, required: true },
  surname: { type: String, required: true },
  phone: {
    type: String,
    /* validate: {
      validator: function (v) {
        return /\d{3}-\d{3}-\d{4}/.test(v)
      },
      message: '{VALUE} is not a valid phone number!'
    }, */
    required: [false, 'User phone number required']
  },
  street: { type: String },
  number: { type: String },
  floor: { type: String },
  door: { type: String },
  postal_code: { type: String },
  city: { type: String },
  province: { type: String },
  country: { type: String },
  observations: { type: String },
  type: { type: Number },
  shop: { type: Number }
})

// Hash user password before saving
userSchema.pre('save', function (next) {
  const user = this
  if (this.isModified('password') || this.isNew) {
    bcrypt.genSalt(10, function (err, salt) {
      if (err) {
        return next(err)
      }
      bcrypt.hash(this.password, salt, null, function (err, hash) {
        if (err) {
          return next(err)
        }
        this.password = hash
        console.log(this.password)
        next()
      })
    })
  }
  else {
    return next()
  }
})
userSchema.pre('findOneAndUpdate', function (next) {
  const user = this
  bcrypt.genSalt(10, function (err, salt) {
    if (err) {
      return next(err)
    }
    bcrypt.hash(user._update.password, salt, null, function (err, hash) {
      if (err) {
        return next(err)
      }
      user.findOneAndUpdate({}, { password: hash })
      next()
    })
  })
})

// Method to compare password input to hashed password saved in database
userSchema.methods.comparePassword = function (pw, cb) {
  bcrypt.compare(pw, this.password, function (err, isMatch) {
    if (err) {
      return cb(err)
    }
    cb(null, isMatch)
  })
}

module.exports = mongoose.model('User', userSchema)
