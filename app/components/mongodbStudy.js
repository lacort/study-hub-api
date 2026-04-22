'use strict'

import dotenv from 'dotenv'
import createLogger from './logger.js'
import { Mongoose } from 'mongoose'

dotenv.config()
const mongooseStudy = new Mongoose()
const configPath = `../../config/${process.env.CONFIG_PATH.toLowerCase()}/main.js`
const objConfig = await import(configPath)
const logger = createLogger()

const intMaxReconnect = objConfig.dbStudy.intMaxReconnect

let intReconnectCurrent = 0

mongooseStudy.set('strictQuery', true)

// MongoDB Connection
function connectWithRetry() {
  mongooseStudy
    .connect(objConfig.dbStudy.strConnection, { autoCreate: false })
    .then(() => {
      intReconnectCurrent = 0
    })
    .catch((err) => {
      logger.error({
        message: `### ERROR connecting with MongoDB Study: ${err}`,
      })
    })
}

connectWithRetry()

const mongodb = mongooseStudy.connection

// Bind connection events
mongodb.on('error', (err) => {
  logger.error({
    message: `### ERROR connecting with MongoDB Study: ${err}`,
  })
})

mongodb.on('reconnected', () => {
  logger.info({ message: '### RECONNECTED to MongoDB Study' })
})

mongodb.on('reconnect', () => {
  logger.info({ message: '### TRYING RECONNECT to MongoDB Study' })
  setTimeout(() => {
    connectWithRetry()
  }, 1000)
})

mongodb.on('disconnected', () => {
  mongodb.close()
  logger.error({ message: '### DISCONNECTED to MongoDB Study' })

  // Retry Connect
  if (intReconnectCurrent < intMaxReconnect) {
    mongodb.emit('reconnect')
    intReconnectCurrent++
  } else {
    logger.error({
      message: '### RECONNECT FAILED after maximum retries to MongoDB Study',
    })
    process.exit(1)
  }
})

mongodb.on('reconnectFailed', () => {
  logger.error({ message: '### RECONNECT FAILED to MongoDB Study' })
})

// Log the connection confirmation
mongodb.on('open', () => {
  const appEnv = process.env.APP_ENV.toUpperCase()
  logger.info({
    message: `### MongoDB Study Database connected successfully on ${appEnv}`,
  })
})

export default mongooseStudy
