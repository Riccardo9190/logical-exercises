function convertName(name: string) {
  let upStringArray: string[] = name.toUpperCase().split(' ')
  let lastName: string[] = upStringArray.splice(upStringArray.length - 1, upStringArray.length - 1)

  let arrayLettersWithPoint = upStringArray.map((names: string)  => {
    let firstLetterWithPoint: string = (`${names[0]}.`)
    return firstLetterWithPoint
  }).join(' ')

  return console.log(`${lastName}, ${arrayLettersWithPoint}`)
}

convertName('Isaac Larrubia Ferreira Pontes')
convertName('John Ronald Reuel Tolkien')
convertName('christopher james paolini')
convertName('Suzanne Marie Collins')
