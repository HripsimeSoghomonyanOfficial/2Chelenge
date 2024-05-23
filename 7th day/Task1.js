function factorial(n) {
    if (n < 0) {
        throw new Error("Input must be a positive integer.");
    }
    
    let result = 1;
    for (let i = 1; i <= n; i++) {
        result *= i;
    }
    return result;
}

console.log(factorial(4)); 

// // Recursive

// function factorial(n) {
//     if (n < 0) {
//         throw new Error("Input must be a positive integer.");
//     }
//     if (n === 0 || n === 1) {
//         return 1;
//     }
//     return n * factorial(n - 1);
// }

// console.log(factorial(4)); 
