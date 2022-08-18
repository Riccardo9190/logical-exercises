function calc(number) {
    let numString = number.toString();
    let array = [];
    for (let i = 0; i < numString.length; i++) {
        let actualNum = parseInt(numString[i]);
        let squaredActualNum = actualNum ** 2;
        array.push(squaredActualNum);
    }
    return array.join('');
}
console.log(calc(3514));
console.log(calc(94571));
console.log(calc(24));
console.log(calc(745821698));
