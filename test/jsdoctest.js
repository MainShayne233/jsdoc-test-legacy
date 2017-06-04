import { expect } from 'chai'
import jsdoctest from '../src'

const modulePath = 'test/support/example_modules/string.js'

describe('jsdoctest/2', () => {

  it('should run the testing function against all exampels in file', () => {
    jsdoctest(modulePath)
  })
})
