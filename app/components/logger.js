'use strict'

import {
  format,
  transports,
  createLogger as winstonCreateLogger,
} from 'winston'

class Logger {
  constructor(appEnv) {
    this.appEnv = appEnv || process.env.NODE_ENV

    this.options = this.configureOptions()

    return this.createLogger()
  }

  configureOptions() {
    let level = 'debug'
    let silent = false
    let objFormat = format.combine(format.timestamp(), format.json())

    switch (this.appEnv) {
      case 'test':
        level = 'debug'
        silent = true
        objFormat = format.json()
        break
      case 'dev':
        level = 'debug'
        silent = false
        objFormat = format.combine(
          format.colorize(),
          format.splat(),
          format.printf(
            (info) =>
              `${new Date().toISOString()} ${info.level}: ${info.message}`,
          ),
        )
        break
      default:
        level = 'debug'
        silent = false
        objFormat = format.combine(format.timestamp(), format.json())
        break
    }
    return {
      console: {
        level,
        silent,
        handleExceptions: true,
        format: objFormat,
      },
    }
  }

  createLogger() {
    return winstonCreateLogger({
      level: 'info',
      transports: [
        new transports.File({ filename: './logs/error.log', level: 'error' }),
        new transports.Console(this.options.console),
      ],
    })
  }
}
const loggerCache = new Map()
export default function createLogger(strEnv = null) {
  const envKey = strEnv || process.env.APP_ENV || 'default'

  if (!loggerCache.has(envKey)) {
    loggerCache.set(envKey, new Logger(envKey))
  }

  return loggerCache.get(envKey)
}
