import { removeSubStrings, stringContains, stringContainsAny } from './utils'

const expectedReturnStartDelimiter = "* //=>"
const exampleStartDelimiter = "@example"
const expectedReturnEndDelimiters = ["*/", "* @example"]

function exampleLineNumbersFor(file) {
  return file.split("\n")
             .map((line, index) => [line, index])
             .filter(lineAndIndex => stringContains(lineAndIndex[0], exampleStartDelimiter) )
             .map(lineAndIndex => lineAndIndex[1])
}

function functionCallStringFor(file, index) {
  const fileLines = file.split("\n")
  let functionCallLines = []
  index += 1
  while (!stringContains(fileLines[index], expectedReturnStartDelimiter)) {
    functionCallLines.push( fileLines[index] )
    index += 1
  }
  return functionCallLines.map(line => removeSubStrings(line, ['*']).trim() ).join("\n")
}

function exampleFunctionNameFor(file, index) {
  return functionCallStringFor(file, index).split('(')[0]
}

function returnValueStringFor(file, index) {
  let returnValueLines = []
  const lines = file.split("\n")
  index++
  while(true) {
    if (lines[index] === undefined) 
      throw(new Error('could not find expected return for example (expected return denoated by //=>)'))
    else if ( stringContains(lines[index], expectedReturnStartDelimiter) )
      break
    else 
      index++
  }
  while (true) {
    if (lines[index] === undefined)
      throw(new Error('could not find end of return value delimiter'))
    else if (stringContainsAny(lines[index], expectedReturnEndDelimiters))
      break
    else {
      returnValueLines.push( 
        removeSubStrings(lines[index], [expectedReturnStartDelimiter, '*'].concat(expectedReturnEndDelimiters) ))
      index++
    }
  }
  return returnValueLines.map(string => string.trim()).join("\n")
}

module.exports = {
  exampleLineNumbersFor,
  exampleFunctionNameFor,
  functionCallStringFor,
  returnValueStringFor,
}
