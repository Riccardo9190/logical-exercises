function chunks(chunks) {
    if (chunks == 1) {
        return 'chunk';
    }
    else {
        return 'chunk - ' + chunksCalculator(chunks - 1);
    }
}
console.log(chunks(3));
console.log(chunks(1));
console.log(chunks(8));
console.log(chunks(4));
