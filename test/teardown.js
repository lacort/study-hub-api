import dotenv from 'dotenv'
// import mongoose from '../app/components/mongodbSchedules.js'
import { after } from 'mocha'

// Config to dotenv
dotenv.config()

// Set the application environment to 'test'
process.env.APP_ENV = 'test'

// Cloasing Conexing
after(async function () {
  // await mongoose.connection.close()
})
