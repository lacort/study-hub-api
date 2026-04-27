'use strict'

import assert from 'assert'
import dotenv from 'dotenv'
import User from '../../../app/modules/userModel.js'
import mongoose from '../../../app/components/mongodbStudy.js'
import { describe, it, afterEach } from 'mocha'

dotenv.config()

describe('User Model Test', () => {
  it('should create a new user', async () => {
    const userData = {
      name: 'John Doe',
      email: 'john.doe@example.com',
      password: 'password123',
    }

    const user = new User(userData)
    await user.save()
    assert.strictEqual(user.name, userData.name)
    assert.strictEqual(user.email, userData.email)
    // password must be hashed
    assert.notStrictEqual(user.password, userData.password)
    // comparePassword should validate the plaintext
    const match = await user.comparePassword(userData.password)
    assert.ok(match)
  })

  it('should not create a user without required fields', async () => {
    const user = new User()
    try {
      await user.save()
      assert.fail('Expected validation to throw')
    } catch (error) {
      assert.ok(error)
    }
  })

  afterEach(async () => {
    // clean users collection between tests
    try {
      const coll = mongoose.connection.collections['users']
      if (coll) await coll.deleteMany({})
    } catch (err) {
      // ignore
    }
  })
})
