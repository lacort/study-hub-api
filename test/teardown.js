import dotenv from 'dotenv'
// import mongoose from '../app/components/mongodbSchedules.js'
import { after } from 'mocha'
import mongoose from 'mongoose'

// Config to dotenv
dotenv.config()

// Set the application environment to 'test'
process.env.APP_ENV = 'test'

// Cloasing Conexing
after(async function () {
  try {
    await mongoose.connection.close()
  } catch (err) {
    // ignore
  }

  // stop in-memory mongo if started
  try {
    if (global.__MONGO_SERVER__) {
      await global.__MONGO_SERVER__.stop()
    }
  } catch (err) {
    // ignore
  }
})
