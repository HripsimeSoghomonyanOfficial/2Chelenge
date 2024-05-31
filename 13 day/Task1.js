function tribonacci(n) {
    if (n <= 0) return [];
    if (n === 1) return [0];
    if (n === 2) return [0, 1];
    if (n === 3) return [0, 1, 1];
    
    let sequence = [0, 1, 1];
    
    for (let i = 3; i < n; i++) {
        let nextValue = sequence[i - 1] + sequence[i - 2] + sequence[i - 3];
        sequence.push(nextValue);
    }
    
    return sequence;
}

console.log(tribonacci(1));
console.log(tribonacci(2));
console.log(tribonacci(3)); 
console.log(tribonacci(10)); 