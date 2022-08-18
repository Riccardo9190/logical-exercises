function sumGrades(...grades) {
    let sum = grades.reduce((accum, total) => accum + total, 0);
    return sum / grades.length;
}
;
console.log(sumGrades(10, 9, 6, 8, 9, 1, 5, 7));
console.log(sumGrades(2, 5, 7, 1, -2));
console.log(sumGrades(10, 10, 10, 10, 9));
console.log(sumGrades(25, 75));
