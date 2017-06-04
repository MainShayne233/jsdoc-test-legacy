import { expect } from 'chai'
import jsdoctest from '../src'

const modulePath = 'test/support/example_modules/string.js'

describe('jsdoctest/2', () => {
  jsdoctest(modulePath)
})
