'use strict'

/**
 * @class
 * @name CustomHeaders
 */
class CustomHeaders {
  /**
   * @function set
   * @description Set default response headers
   * @author Jefferson Lacort
   * @param req
   * @param res
   * @param next
   * @returns void
   */
  set(req, res, next) {
    res.setHeader('X-Api-Study-Version', process.env.APP_VERSION)
    next()
  }
}

export default new CustomHeaders()
