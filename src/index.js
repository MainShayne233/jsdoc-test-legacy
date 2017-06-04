import { exampleFunctionReturnValueFor, expectedReturnValueFor } from './evaluators'
import { exampleLineNumbersFor, exampleFunctionNameFor } from './parsers'
import { expect } from 'chai'
import fs from 'fs'
import path from 'path'

export default function(filePath, options = {}) {
  const fullPath = path.join(process.cwd(), filePath)
  const testingFunction = options.testingFunction || defaultTestingFunction
  const file = fs.readFileSync(filePath, 'utf8')
  exampleLineNumbersFor(file).map(lineNumber => {
    const exampleFunctionName = exampleFunctionNameFor(file, lineNumber)
    const expectedReturnValue = expectedReturnValueFor(file, lineNumber)
    const exampleFunctionReturnValue = exampleFunctionReturnValueFor(fullPath, file, lineNumber)
    testingFunction(exampleFunctionName, exampleFunctionReturnValue, expectedReturnValue)
  })
}

function defaultTestingFunction(functionName, actualReturnValue, expectedReturnValue) {
  it(`${functionName} should match its doc example value`, () => {
    expect(actualReturnValue).to.eql(expectedReturnValue)
  })
}
