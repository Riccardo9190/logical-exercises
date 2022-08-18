function highestLetter(stringParameter) {
    let lowercase = stringParameter.toLowerCase();
    let array = [...lowercase];
    array.sort();
    return array[array.length - 1];
}
console.log(highestLetter('Lorem ipsum dolore sec avanti'));
console.log(highestLetter('Hello'));
console.log(highestLetter('May the force be with you'));
console.log(highestLetter('It\'s over nine thousen'));
