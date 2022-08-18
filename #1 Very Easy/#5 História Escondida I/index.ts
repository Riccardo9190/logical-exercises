function highestLetter(stringParameter: string) {
  let lowercase: string = stringParameter.toLowerCase()
  let array: string[] = [...lowercase]
  array.sort()
  return array[array.length - 1]
}

console.log(highestLetter('Lorem ipsum dolore sec avanti'))
console.log(highestLetter('Hello'))
console.log(highestLetter('May the force be with you'))
console.log(highestLetter('It\'s over nine thousen'))
