const expectedReturnStartDelimiter = "* //=>"
const exampleStartDelimiter = "@example"
const expectedReturnEndDelimiters = ["*/", "* @example"]

function exampleLineNumbers(file) {
  return file.split("\n")
             .map((line, index) => [line, index])
             .filter(lineAndIndex => stringContains(lineAndIndex[0], exampleStartDelimiter) )
             .map(lineAndIndex => lineAndIndex[1])
}

function expectedReturnValue(file, exampleIndex) {
  const string = returnValueString(file, exampleIndex)
  try {
    return eval(`( ${string} )`)
  } catch(e) {
    throw(new Error(`Failed to eval string to value: ${string}`))
  }
}

function returnValueString(file, index) {
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
  return returnValueLines.join("\n")
}

function removeSubStrings(string, substrings) {
  if (substrings.length === 0) return string
  return removeSubStrings(
    string.split(substrings[0]).join(''),
    substrings.slice(1, substrings.length)
  )
}

function stringContainsAny(string, substrings) {
  if (substrings.length === 0) return false
  else if (stringContains(string, substrings[0])) return true
  else return stringContainsAny(string, substrings.slice(1, substrings.length))
}

function stringContains(string, substring) {
  return string.indexOf(substring) !== -1
}

module.exports = {
  exampleLineNumbers,
  expectedReturnValue,
}
