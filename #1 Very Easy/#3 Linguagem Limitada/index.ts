function revertArray(array: any[]) {
  let revertedArray: any[] = []
  
  for (let i = array.length; i != 0; i--) {
    let lastArrayItem = array.pop()
    revertedArray.push(lastArrayItem)
  }

  return revertedArray
}

console.log(revertArray([0, 9, 6, 8, 9, 1, 5, 7]))
console.log(revertArray(['Oh', 'Hi', 'Mark']))
console.log(revertArray([false, true, true, true]))
console.log(revertArray(['It\'s', "not", true, 0]))