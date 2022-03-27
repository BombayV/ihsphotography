const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  avatar: {
    type: String,
    default: 'imgur.png',
  },
  date: {
    type: Date,
    default: Date.now,
  },
})

userSchema.pre('save', async function (next) {
  const user = this
  if (user.isModified('password')) {
    user.password = await bcrypt.hash(user.password, 10)
  }
  next()
})

userSchema.methods.comparePassword = function (password) {
  return new Promise(async (resolve, reject) => {
    const user = this
    const isValid = await bcrypt.compare(password, user.password)
    resolve(isValid)
  })
}

const User = mongoose.model('User', userSchema)

module.exports = User
