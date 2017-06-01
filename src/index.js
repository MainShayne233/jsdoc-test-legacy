function exampleLineNumbers(file) {
  return file.split("\n")
             .map((line, index) => [line, index])
             .filter(lineAndIndex => lineAndIndex[0].indexOf('@example') !== -1)
             .map(lineAndIndex => lineAndIndex[1])
}

function expectedReturnValue(file, exampleIndex) {
  const string = returnValueString(file, exampleIndex).split('* //=>')[1]
  return eval(`( ${string} )`)
}

function returnValueString(file, exampleIndex) {
  const lines = file.split("\n")
  while(true) {
    const line = lines[exampleIndex]
    if (line === undefined) throw(new Error('could not find expected return for example (expected return denoated by //=>)'))
    else if(line.indexOf('//=>') !== -1) return line
    else exampleIndex++
  }
}

module.exports = {
  exampleLineNumbers,
  expectedReturnValue,
}
