'use strict'

import dotenv from 'dotenv'
import { MongoMemoryServer } from 'mongodb-memory-server'

let __mongoServer

// Set the application environment to 'test'
process.env.APP_ENV = 'test'
process.env.CONFIG_PATH = 'test'

// Config to dotenv
dotenv.config()

const start = async function () {
  // Start in-memory MongoDB and expose URI for config
  ;async () => {
    if (process.env.APP_ENV === 'test') {
      __mongoServer = await MongoMemoryServer.create()
      const uri = __mongoServer.getUri()
      process.env.MONGO_URI = uri
      // expose server instance to teardown via global
      global.__MONGO_SERVER__ = __mongoServer
    }
  }
}
start()
