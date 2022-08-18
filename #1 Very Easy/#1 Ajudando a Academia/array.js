function media(array) {
    let sum = 0;
    array.forEach((number) => {
        sum += number;
    });
    return sum / array.length;
}
console.log(media([10, 9, 6, 8, 9, 1, 5, 7]));
console.log(media([2, 5, 7, 1, -2]));
console.log(media([10, 10, 10, 10, 9]));
console.log(media([25, 75]));
