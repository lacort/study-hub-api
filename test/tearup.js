'use strict'

import dotenv from 'dotenv'

// Set the application environment to 'test'
process.env.APP_ENV = 'test'
process.env.CONFIG_PATH = 'test'

// Config to dotenv
dotenv.config()
