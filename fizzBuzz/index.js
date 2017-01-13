function fizzBuzz (number) {
  if (isDivisibleByThree(number) && isDivisibleByFive(number)) {
    return 'fizzbuzz'
  } else if (isDivisibleByThree(number)) {
    return 'fizz'
  } else if (isDivisibleByFive(number)) {
    return 'buzz'
  } else {
    return number
  }
}

function isDivisibleByThree (number) {
  return number % 3 === 0
}

function isDivisibleByFive (number) {
  return number % 5 === 0
}

module.exports = {
  fizzBuzz
}
