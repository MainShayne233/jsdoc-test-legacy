import { functionCallStringFor, returnValueStringFor } from './parsers'

function exampleFunctionReturnValueFor(modulePath, file, index) {
  const functionCallString = functionCallStringFor(file, index)
  const evalString = `require('${modulePath}').${functionCallString}`
  try {
   return eval( evalString )
  } catch(error) {
    throw(new Error(`Failed to eval function return value: ${evalString}`))
  } 
}

function expectedReturnValueFor(file, exampleIndex) {
  const string = returnValueStringFor(file, exampleIndex)
  try {
    return eval(`( ${string} )`)
  } catch(error) {
    throw(new Error(`Failed to eval expected return value string: ${string}`))
  }
}

module.exports = {
  expectedReturnValueFor,
  exampleFunctionReturnValueFor,
}
