'use strict'
import dotenv from 'dotenv'
import UserModel from '../modules/userModel.js'

/**
 * @class
 * @name Study
 */
class Study {
  /**
   * @name getCheck
   * @description Get Study Check
   * @author Jefferson Lacort
   * @returns string
   */
  getCheck(req, res, next) {
    try {
      const teste = req.body.teste
      if (teste) {
        return res.status(200).json({ message: `Received: ${teste}` })
      }
    } catch (error) {
      next(error)
    }
  }
}

export default new Study()
