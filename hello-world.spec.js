const { equal } = require('assert')
const { helloWorld } = require('./hello-world')

describe('hello-world.js', () => {
  describe('helloWorld', () => {
    it('should return hello world', () => {
      const actual = helloWorld()
      const expected = 'hello world'

      equal(actual, expected)
    })
  })
})
