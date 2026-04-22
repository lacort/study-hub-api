'use strict'

import studyController from '../controllers/v1/studyController.js'
import mongoTools from '../components/mongoTools.js'

/**
 * @description Setup Study Routes
 * @author Jefferson Lacort
 * @param {object} app
 */
export default function setupStudyRoutes(app) {
  app
    .route('/v1/study/check')
    .get([mongoTools.isMongoConnected, studyController.getCheck])
}
