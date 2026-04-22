'use strict'

import dotenv from 'dotenv'
import createLogger from './logger.js'

dotenv.config()
const logger = createLogger()

import mongoose from '../components/mongodbStudy.js'

const schema = mongoose.Schema(
  {
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
