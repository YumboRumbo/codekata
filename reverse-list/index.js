const reverseList = (inputList) => {
  let newInputList = []
  for (let i = inputList.length - 1; i >= 0; i--) {
    newInputList.push(inputList[i])
  }
  return newInputList
}

const reverseListInPlace = (inputList) => {
  let beginFlag = 0
  let endFlag = inputList.length - 1
  while (beginFlag < endFlag) {
    let firstItem = inputList[beginFlag]
    let lastItem = inputList[endFlag]
    inputList[beginFlag] = lastItem
    inputList[endFlag] = firstItem
    beginFlag += 1
    endFlag -= 1
  }
  return inputList
}

module.exports = {
  reverseList,
  reverseListInPlace
}
