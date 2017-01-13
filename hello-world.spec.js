const { equal } = require('assert')
const { helloWorld, helloJustin } = require('./hello-world')

describe('hello-world.js', () => {
  describe('helloWorld', () => {
    it('should return hello world', () => {
      const actual = helloWorld()
      const expected = 'hello world'

      equal(actual, expected)
    })
  })
  describe('helloJustin', () => {
    it('should return hello Justin', () => {
      const actual = helloJustin()
      const expected = 'hello Justin'

      equal(actual, expected)
    })
  })
})
