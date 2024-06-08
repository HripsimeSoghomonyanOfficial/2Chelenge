function sumAboveAuxiliaryDiagonal(matrix) {
    let sum = 0;    
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (i + j < 2) { 
                sum += matrix[i][j];
            }
        }
    }    
    return sum;
}
const matrix = [
    [5, 8, 12],
    [4, 9, 6],
    [12, 14, 15]
];
console.log(sumAboveAuxiliaryDiagonal(matrix));