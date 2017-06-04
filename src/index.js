import { functionCallStringFor, returnValueStringFor } from './parsers'

function exampleFunctionReturnValue(modulePath, file, index) {
  const functionCallString = functionCallStringFor(file, index)
  const evalString = `require('../${modulePath}').${functionCallString}`
  try {
   return eval( evalString )
  } catch(error) {
    throw(new Error(`Could not eval ${evalString}`))
  } 
}

function expectedReturnValue(file, exampleIndex) {
  const string = returnValueStringFor(file, exampleIndex)
  try {
    return eval(`( ${string} )`)
  } catch(e) {
    throw(new Error(`Failed to eval string to value: ${string}`))
  }
}

module.exports = {
  expectedReturnValue,
  exampleFunctionReturnValue,
}
