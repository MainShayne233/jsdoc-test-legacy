import { expect } from 'chai'
import fs from 'fs'
import parsers from '../src/parsers'

const stringModulePath = 'test/support/example_modules/string.js'
const stringModuleFile = fs.readFileSync(stringModulePath, 'utf8')

describe('parsers', () => {

  describe('exampleLineNumbersFor/1', () => {
    it('returns a list of line numbers that have @example in them', () => {
      const exampleLineNumbersFor = parsers.exampleLineNumbersFor(stringModuleFile)
      expect( exampleLineNumbersFor.length ).to.equal(4)
      expect( exampleLineNumbersFor ).to.have.members([6, 9, 26, 48])
    })
  })

  describe('functionCallStringFor/2', () => {
    it('should return the string version of the example function call', () => {
      expect ( parsers.functionCallStringFor(stringModuleFile, 6) ).to.equal("titleize('wOaH')")
      expect ( parsers.functionCallStringFor(stringModuleFile, 9) ).to.equal("titleize('w')")
      expect ( parsers.functionCallStringFor(stringModuleFile, 26) ).to.equal("stringData('woah')")
      expect ( parsers.functionCallStringFor(stringModuleFile, 48) ).to.equal("split('why am i doing this?', ' ')")
    })
  })

  describe('returnValueStringFor/2', () => {
    it('should return the string version of the expected return value for the function', () => {
      expect ( parsers.returnValueStringFor(stringModuleFile, 6)  ).to.equal("'Woah'")
      expect ( parsers.returnValueStringFor(stringModuleFile, 9)  ).to.equal("'W'")
      expect ( parsers.returnValueStringFor(stringModuleFile, 26)  ).to.equal("{\nlength: 4,\nvowels: 2,\nconsonants: 2\n}")
      expect ( parsers.returnValueStringFor(stringModuleFile, 48)  ).to.equal("[ 'why', 'am', 'i', 'doing', 'this?' ]")
    })
  })
})
