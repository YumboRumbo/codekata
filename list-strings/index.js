
const _ = require('lodash')

function getLargestNumber2 (numbers) {
  const sortedNumbers = _.sortBy(numbers, [function (o) { return o }])
  return sortedNumbers[sortedNumbers.length - 1]
}
function getLargestNum (numbers) {
  let largestNum
  if (numbers.length === 0) {
    throw new Error('Empty array')
  }
  largestNum = numbers[0]
  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > largestNum) {
      largestNum = numbers[i]
    }
  }
  return largestNum
}

module.exports = {
  getLargestNum: getLargestNumber2
}
