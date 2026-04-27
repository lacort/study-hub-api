'use strict'

import dotenv from 'dotenv'
import { describe, it, after } from 'mocha'
import assert from 'assert'
import mongoDb from '../../../app/components/mongodbStudy.js'
import User from '../../../app/modules/userModel.js'
import mongo from 'mongodb'

process.env.APP_ENV = 'test'
dotenv.config()

const ObjectID = mongo.ObjectId

describe('MongoDB ', function () {
  it('connection', async function () {
    const userData = {
      name: 'John Doe',
      email: 'john.doe@example.com',
      password: 'password123',
    }

    const user = new User(userData)
    // await user.save()

    const response = await user.validateSync()
    assert.equal(response, undefined)
  })

  it('Teste Messages ("on")', async function () {
    this.timeout(5000)
    const connection = mongoDb.connection

    assert.equal(connection.emit('error'), true)
    assert.equal(connection.emit('reconnected'), true)
    assert.equal(connection.emit('reconnectFailed'), true)
  })

  after(async function () {
    const user = new User()
    await user.deleteMany({})
  })
})
