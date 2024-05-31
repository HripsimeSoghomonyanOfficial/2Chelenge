function isArmstrongNumber(num) {
    const numStr = num.toString();
    const numDigits = numStr.length;
    
    let sum = 0;
    for (let digit of numStr) {
        sum += Math.pow(parseInt(digit), numDigits);
    }
    
    return sum === num;
}

console.log(isArmstrongNumber(153));
console.log(isArmstrongNumber(178));
