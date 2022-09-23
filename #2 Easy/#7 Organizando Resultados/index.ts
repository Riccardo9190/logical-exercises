function arrayDimensional ([...params]: number[][]) {
  let array: number[] = [].concat(...params)
  
  let orderedArray: number[] = array.sort((a,b) => {
    return a - b
  })
  
  console.log(orderedArray)
}

arrayDimensional([ [1, 5, 3], [6, 19, 11], [47, 128, 5], [1, 93, 57, 42, 103] ])
arrayDimensional([ [1, 3], [4, 8], [7, 5], [2, 6] ])
arrayDimensional([ [], [], [], [] ])
arrayDimensional([ [100, 50], [60, 100], [20, 100, 70], [10, 40, 80, 90] ])