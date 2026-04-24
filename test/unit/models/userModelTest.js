'use strict'

import assert from 'assert'
import dotenv from 'dotenv'
import User from '../../../app/modules/userModel.js'
import { describe, it } from 'mocha'

dotenv.config()

describe('User Model Test', () => {
  it('should create a new user', async () => {
    const userData = {
      name: 'John Doe',
      email: 'john.doe@example.com',
      password: 'password123',
    }

    const user = new User(userData)
    await user.validate()
    assert.strictEqual(user.name, userData.name)
    assert.strictEqual(user.email, userData.email)
    assert.strictEqual(user.password, userData.password)
  })

  it('should not create a user without required fields', async () => {
    const user = new User()
    try {
      await user.validate()
      assert.fail('Expected validation to throw')
    } catch (error) {
      assert.ok(error)
    }
  })
})
