// Environment settings
import dotenv from 'dotenv'

// import 'newrelic'
import express from 'express'
import mongoSanitize from './app/components/mongoSanitize.js'
import bodyParser from 'body-parser'
import helmet from 'helmet'
import fnRegisterRoutesInV1 from './app/routes/v1.js'
import customHeaders from './app/components/customHeaders.js'
import createLogger from './app/components/logger.js'
import globalMiddleware from './app/middlewares/error.middleware.js'
import http from 'http'
dotenv.config()

const app = express()

const logger = createLogger()
process.setMaxListeners(30)
// Main middleware setup
app.use(customHeaders.set)
app.use(bodyParser.urlencoded({ extended: true }))
app.use(
  bodyParser.json({
    verify: (req, res, buf, encoding) => {
      try {
        JSON.parse(buf)
      } catch (err) {
        logger.error('Invalid JSON request: ' + err.stack)
        res.status(400).json({ message: 'Invalid JSON Request' })
      }
    },
  }),
)
app.use(helmet())
app.use(mongoSanitize)

// Route configuration
fnRegisterRoutesInV1(app)

// Global error handling middleware
app.use(globalMiddleware)

// HTTP server initialization
const server = http.createServer(app)
const numPort = 80
const strProtocol = 'HTTP'

server.listen(numPort, () => {
  const strEnv = process.env.APP_ENV.toUpperCase()
  logger.info(
    `API Study Version ${process.env.APP_VERSION} started on port ${numPort} over ${strProtocol} in ${strEnv}`,
  )
})

// Prepare for conditional export
let exportedApp = null
if (process.env.APP_ENV.toLowerCase() === 'test') {
  exportedApp = app
}

// Export the app if it's in the test environment
export default exportedApp
