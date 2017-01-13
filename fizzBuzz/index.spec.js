// FizzBuzz
// When a number is divisible by 3, write 'fizz'
// when a number is divisible by 5, write 'buzz'
// when a number is divisible by both 3 and 5, write 'fizzbuzz'
// otherwise, write the number
const { fizzBuzz } = require('./index')
const { equal } = require('assert')

describe('index.js', () => {
  describe('fizzBuzz()', () => {
    it('should return fizz for multiples of 3', () => {
      const expected = 'fizz'
      const actual = fizzBuzz(6)

      equal(actual, expected)
    })

    it('should return the number for non-multiples of 3', () => {
      const expected = 7
      const actual = fizzBuzz(7)

      equal(actual, expected)
    })

    it('should return buzz for multiples of 5', () => {
      const expected = 'buzz'
      const actual = fizzBuzz(10)

      equal(actual, expected)
    })

    it('should return fizzbuzz for multiples of both 3 and 5', () => {
      const expected = 'fizzbuzz'
      const actual = fizzBuzz(15)

      equal(actual, expected)
    })
  })
})
