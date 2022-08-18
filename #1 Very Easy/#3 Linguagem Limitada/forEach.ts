function forEach(array: any[]) {
  let newArray: any[] = []

  array.forEach((item) => {
    newArray.unshift(item)
  })

  return newArray
}

console.log(forEach([0, 9, 6, 8, 9, 1, 5, 7]))
console.log(forEach(['Oh', 'Hi', 'Mark']))
console.log(forEach([false, true, true, true]))
console.log(forEach(['It\'s', "not", true, 0]))