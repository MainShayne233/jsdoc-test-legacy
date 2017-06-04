import { expect } from 'chai'
import fs from 'fs'
import doctest from '../src'

const stringModulePath = 'test/support/example_modules/string.js'
const stringModuleFile = fs.readFileSync(stringModulePath, 'utf8')
const stringModule = require('../' + stringModulePath)

describe('Doctest', () => {

  describe('exampelFunctionReturnValue/3', () => {

    it('should return the result of calling the example function', () => {
      const functionCallResult = doctest.exampelFunctionReturnValue(
        stringModule,
        stringModuleFile,
        6
      )
      expect( functionCallResult ).to.equal('Woah')
    })
  })

  describe('exampleLineNumbers/1', () => {
    it('returns a list of line numbers that have @example in them', () => {
      const exampleLineNumbers = doctest.exampleLineNumbers(stringModuleFile)
      expect( exampleLineNumbers.length ).to.equal(4)
      expect( exampleLineNumbers[0] ).to.equal(6)
      expect( exampleLineNumbers[1] ).to.equal(9)
      expect( exampleLineNumbers[2] ).to.equal(26)
      expect( exampleLineNumbers[3] ).to.equal(48)
    })
  })

  describe('expectedReturnValue/2', () => {
    it('should return the expected return value for the when the function returns a string', () => {
      const expectedReturnValue = doctest.expectedReturnValue(stringModuleFile, 6)
      expect( expectedReturnValue ).to.equal('Woah')
    })

    it('should return the expected return value for the when the function returns an object', () => {
      const expectedReturnValue = doctest.expectedReturnValue(stringModuleFile, 26)
      expect( expectedReturnValue.constructor ).to.equal(Object)
      expect( expectedReturnValue.length ).to.equal(4)
      expect( expectedReturnValue.vowels ).to.equal(2)
      expect( expectedReturnValue.consonants ).to.equal(2)
    })

    it('should return the expected return value for the when the function returns an array', () => {
      const expectedReturnValue = doctest.expectedReturnValue(stringModuleFile, 44)
      expect( expectedReturnValue.constructor ).to.equal(Array)
      expect( expectedReturnValue[0] ).to.equal('why')
      expect( expectedReturnValue[1] ).to.equal('am')
      expect( expectedReturnValue[2] ).to.equal('i')
      expect( expectedReturnValue[3] ).to.equal('doing')
      expect( expectedReturnValue[4] ).to.equal('this?')
    })
  })
})
