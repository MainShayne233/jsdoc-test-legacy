# jsdoc-test

Run [JSDoc](http://usejsdoc.org/about-getting-started.html) style doc examples as tests within your test suite


[![npm version](https://badge.fury.io/js/jsdoc-test.svg)](https://badge.fury.io/js/jsdoc-test)
[![Build Status](https://travis-ci.org/MainShayne233/jsdoc-test.svg?branch=master)](https://travis-ci.org/MainShayne233/jsdoc-test)

## Usage

Install in your project
```bash
npm i --save-dev jsdoc-test
```

Write a function with a [JSDoc style documentation](http://usejsdoc.org/about-getting-started.html)
```javascript
/**
 * Returns fairly unnecessary and uninteresting information about a string
 * @param {string} string - The string of disinterest
 * @return {object} Useless information
 * @example
 * stringData('woah')
 * //=>
 * {
 *   length: 4,
 *   vowels: 2,
 *   consonants: 2  
 * }
 */
export function stringData(string) {
  const vowels = string.toLowerCase().split('').filter(char => {
    return ['a', 'e', 'i', 'o', 'u', 'y'].find(v => char === v)
  }).length
  return {
    length: string.length,
    vowels: vowels,
    consonants: string.length - vowels,
  }
}
```

Import the jsdoctest function in your test suite and point it at the file.
```javascript
import jsdoctest from 'jsdoc-test'

describe('stringData Doctests', () => {
  jsdoctest('src/string/index.js') // path is relative to root of directory
})
```

And this will run and test all `@example`s in the given file

## Testing Function

By default, `jsdoctest` will pass both the expected return value, and actual return
value of your example into a basic [chai](https://github.com/chaijs/chai) expect.
```javascript
expect( actualReturnValue ).to.eql( expectedReturnValue )
```

But this function can be overridden by any function that takes two arguments.
```javascript
describe('stringData Doctests', () => {
  jsdoctest('src/string/index.js', {
    testingFunction: (actual, expected) => { console.log( actual === expected) }
  })
})
```
