const { reverseList, reverseListInPlace } = require('./index')
const { deepEqual, equal } = require('chai').assert

describe('index.js', () => {
  describe('reverseList()', () => {
    it('should reverse the list', () => {
      const inputList = [1, 2, 3]
      // SetUp
      const expected = [3, 2, 1]
      // Action
      const actual = reverseList(inputList)
      // Assert
      deepEqual(actual, expected)
    })

    it('should reverse a list of strings', () => {
      const inputList = ['sang', 'justin', 'brandon']
      const expected = ['brandon', 'justin', 'sang']
      const actual = reverseList(inputList)

      deepEqual(actual, expected)
    })

    it('should reverse a list in place', () => {
      let inputList = [1, 2, 3, 4, 5, 6]
      // const expected = ['brandon', 'justin', 'sang']
      let actual = reverseListInPlace(inputList)
      deepEqual(actual, [6, 5, 4, 3, 2, 1])
      equal(actual, inputList)
    })
  })
})
