import { expect } from 'chai'
import jsdoctest from '../index.js'

const modulePath = 'test/support/example_modules/string.js'

describe('build', () => {

  it('should work', () => {
    jsdoctest(modulePath)
  })
})
