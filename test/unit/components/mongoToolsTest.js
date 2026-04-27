'use strict'

import dotenv from 'dotenv'
import { describe, it } from 'mocha'
import assert from 'assert'
import mongoTools from '../../../app/components/mongoTools.js'

process.env.APP_ENV = 'test'
dotenv.config()

const res = {
  json: (obj) => { res.body = obj; return res },
  status: (intHttpStatus) => { res.headers = { status: intHttpStatus }; return res }
}

describe('MongoTools', function () {
  it('Mongo Service Connection', async function () {
    // Success
    const req = { body: '' }
    await mongoTools.isMongoConnected(req, res, () => { res.status(200).json(true) })
    assert.equal(res.headers.status, 200)
  })

  it('Mongo Service Connection Error 500', async function () {
    await mongoTools.isMongoConnected(null, res, null)
    assert.equal(res.headers.status, 500)
  })
})
