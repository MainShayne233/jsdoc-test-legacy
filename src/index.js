import { exampleFunctionReturnValueFor, expectedReturnValueFor } from './evaluators'
import { exampleLineNumbersFor } from './parsers'
import { expect } from 'chai'
import fs from 'fs'
import path from 'path'

export default function(filePath, options = {}) {
  const fullPath = path.join(process.cwd(), filePath)
  const testingFunction = options.testingFunction || defaultTestingFunction
  const file = fs.readFileSync(filePath, 'utf8')
  exampleLineNumbersFor(file).map(lineNumbers => {
    const expectedReturnValue = expectedReturnValueFor(file, lineNumbers)
    const exampleFunctionReturnValue = exampleFunctionReturnValueFor(fullPath, file, lineNumbers)
    testingFunction(exampleFunctionReturnValue, expectedReturnValue)
  })
}

function defaultTestingFunction(actualReturnValue, expectedReturnValue) {
  expect(actualReturnValue).to.eql(expectedReturnValue)
}
