'use strict'

import createLogger from './logger.js'
import mongooseStudy from './mongodbStudy.js'

const logger = createLogger()

/**
 * @class
 * @name MongoTools
 */
class MongoTools {
  /**
   * @function isMongoConnected
   * @author Marcelo Melo
   * @param {object} req
   * @param {object} res
   * @param {function} next
   * @returns void
   */
  async isMongoConnected(req, res, next) {
    try {
      // check mongo connection
      if (mongooseStudy.connection.readyState.toString() === '1') {
        next()
      } else {
        logger.error({
          message:
            'MongoTools.isMongoConnected: ### DISCONNECTED to MongoDB Study',
        })
        res
          .status(500)
          .json({ message: 'Something got wrong. Please contact support.' })
      }
    } catch (err) {
      logger.error({ message: 'MongoTools.isMongoConnected: ' + err.stack })
      res
        .status(500)
        .json({ message: 'Something got wrong. Please contact support.' })
    }
  }
}

export default new MongoTools()
