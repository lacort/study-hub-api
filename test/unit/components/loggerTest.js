'use strict'

import dotenv from 'dotenv'
import assert from 'assert'
import { describe, it } from 'mocha'
import createLogger from '../../../app/components/logger.js'

process.env.APP_ENV = 'dev'
dotenv.config()

describe('Logger', function () {
  let logger = createLogger()

  it('create client', async function () {
    let x = logger.error({ message: '### ERROR connecting with MongoDB (PROCESS_ENV)' })
    assert.strictEqual(typeof x, 'object')
    assert.strictEqual(x.level, 'info')

    logger = createLogger('sandbox')
    x = logger.error({ message: '### ERROR connecting with MongoDB (SANDBOX)' })
    assert.strictEqual(typeof x, 'object')
    assert.strictEqual(x.level, 'info')

    logger = createLogger('prod')
    x = logger.error({ message: '### ERROR connecting with MongoDB (PROD)' })
    assert.strictEqual(typeof x, 'object')
    assert.strictEqual(x.level, 'info')

    logger = createLogger('dev')
    x = logger.error({ message: '### ERROR connecting with MongoDB (dev)' })
    assert.strictEqual(typeof x, 'object')
    assert.strictEqual(x.level, 'info')

    logger = createLogger('test')
    x = logger.error({ message: '### ERROR connecting with MongoDB (test)' })
    assert.strictEqual(typeof x, 'object')
    assert.strictEqual(x.level, 'info')
  })
})
