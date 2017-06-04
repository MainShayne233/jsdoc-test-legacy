import { expect } from 'chai'
import fs from 'fs'
import path from 'path'
import evaluators from '../src/evaluators'

const stringModulePath = path.join(process.cwd(), 'test/support/example_modules/string.js')
const stringModuleFile = fs.readFileSync(stringModulePath, 'utf8')
const stringModule = require(stringModulePath)

describe('Doctest', () => {

  describe('exampelFunctionReturnValueFor/3', () => {

    it('should return the result of calling the example function', () => {
      const functionCallResult = evaluators.exampleFunctionReturnValueFor(
        stringModulePath,
        stringModuleFile,
        6
      )
      expect( functionCallResult ).to.equal('Woah')
    })
  })

  describe('expectedReturnValueFor/2', () => {

    it('should return the expected return value for the when the function returns a string', () => {
      const expectedReturnValue = evaluators.expectedReturnValueFor(stringModuleFile, 6)
      expect( expectedReturnValue ).to.equal('Woah')
    })

    it('should return the expected return value for the when the function returns an object', () => {
      const expectedReturnValue = evaluators.expectedReturnValueFor(stringModuleFile, 26)
      expect( expectedReturnValue.constructor ).to.equal(Object)
      expect( expectedReturnValue.length ).to.equal(4)
      expect( expectedReturnValue.vowels ).to.equal(2)
      expect( expectedReturnValue.consonants ).to.equal(2)
    })

    it('should return the expected return value for the when the function returns an array', () => {
      const expectedReturnValue = evaluators.expectedReturnValueFor(stringModuleFile, 44)
      expect( expectedReturnValue.constructor ).to.equal(Array)
      expect( expectedReturnValue[0] ).to.equal('why')
      expect( expectedReturnValue[1] ).to.equal('am')
      expect( expectedReturnValue[2] ).to.equal('i')
      expect( expectedReturnValue[3] ).to.equal('doing')
      expect( expectedReturnValue[4] ).to.equal('this?')
    })
  })
})
