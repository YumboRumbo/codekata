const { getLargestNum } = require('./index')
const { equal } = require('assert')
const assert = require('chai')

describe('list-strings', () => {
  describe('getLargestNum', () => {
    it('should return the largest element in a list', () => {
      const numbers = [2, 4, 10, 1, 5, 2, 7]
      // const strings = ['hi', 'hello', 'greetings']
      // const stuff = [1, 'hi', numbers, strings]

      const expected = 10
      const actual = getLargestNum(numbers)

      equal(actual, expected)
    })

    it('should handle empty array', () => {
      const numbers = []

      assert.throw(getLargestNum(numbers), /Empty array/)
    })
  })
})
