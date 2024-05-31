function maskString(x) {
    if (x.length <= 4) {
        return x;
    } else {
        let maskedPart = '#'.repeat(x.length - 4);
        let lastFourChars = x.slice(-4);
        return maskedPart + lastFourChars;
    }
}

console.log(maskString("123456789")); 
console.log(maskString("1234"));  
console.log(maskString("12"));  
console.log(maskString("abcdefg"));  