'use strict'

import useStudy from '../../components/study.js'
import dotenv from 'dotenv'

dotenv.config()
const configPath = `../../../config/${process.env.CONFIG_PATH.toLowerCase()}/main.js`
const objConfig = await import(configPath)

/**
 * @description Study Controller
 * @author Jefferson Lacort
 */
class StudyController {
  /**
   * @description Get Study Check

   * @author Jefferson Lacort
   * @param {object} req
   * @param {object} res
   * @param {function} next
   * @returns object
   */
  getCheck(req, res, next) {
    return useStudy.getCheck(req, res, next)
  }
}

export default new StudyController()
