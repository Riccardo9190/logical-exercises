function highestLetterII(stringParameter) {
    let toLowerCase = stringParameter.toLowerCase();
    let array = toLowerCase.split(" ");
    let map = array.map((string) => {
        let reversedString = '';
        for (let i = string.length - 1; i >= 0; i--) {
            reversedString += string[i];
        }
        return reversedString;
    });
    return console.log(...map);
}
highestLetterII('Lorem ipsum dolore sec avanti');
highestLetterII('Hello');
highestLetterII('May the force be with you');
highestLetterII('It\'s over nine thousen');
