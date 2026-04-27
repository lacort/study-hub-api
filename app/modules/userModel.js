'use strict'
import bcrypt from 'bcrypt'

import dotenv from 'dotenv'

dotenv.config()

import mongoose from '../components/mongodbStudy.js'

const schema = mongoose.Schema(
  {
    _id: mongoose.Schema.Types.ObjectId,
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true },
)

const User = mongoose.model('User', schema)
export default User

// Hash password before saving
schema.pre('save', async function (next) {
  try {
    if (!this.isModified('password')) return next()
    const saltRounds = parseInt(process.env.BCRYPT_SALT_ROUNDS, 10) || 10
    const salt = await bcrypt.genSalt(saltRounds)
    this.password = await bcrypt.hash(this.password, salt)
    next()
  } catch (err) {
    next(err)
  }
})

// Instance method to compare password
schema.methods.comparePassword = async function (candidatePassword) {
  return bcrypt.compare(candidatePassword, this.password)
}
