import createLogger from '../components/logger'

const logger = createLogger()

export default function globalErrorMiddleware(err, req, res, next) {
  const statusCode = err.statusCode || 500
  const errorName = err.name || 'Internal Server Error'
  const message = err.message || 'Something went wrong, contact support.'

  logger.error({
    error: errorName,
    message: message,
    stack: err.stack,
    path: req.originalUrl,
    method: req.method,
  })

  return res.status(statusCode).json({
    success: false,
    error: errorName,
    message: message,
    details: {
      message,
    },
  })
}
