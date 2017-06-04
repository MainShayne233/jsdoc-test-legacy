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
  removeSubStrings,
  stringContains,
  stringContainsAny,
}
