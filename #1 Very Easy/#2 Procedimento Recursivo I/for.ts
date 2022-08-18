function chunksCalculator(chunk:number) {
  
  let array: string[] = []
  
  for(let i = chunk; i > 0; i--) {
    array.push('chunk')
  }
  
  return array.join(' - ')
}

console.log(chunksCalculator(3))
console.log(chunksCalculator(1))
console.log(chunksCalculator(8))
console.log(chunksCalculator(4))