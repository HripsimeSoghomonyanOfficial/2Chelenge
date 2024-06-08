function calculateLuhnCheckDigit(cardNumber) {
    let sum = 0;
    let shouldDouble = false;
    for (let i = cardNumber.length - 1; i >= 0; i--) {
        let digit = parseInt(cardNumber.charAt(i));

        if (shouldDouble) {
            digit *= 2;
            if (digit > 9) {
                digit -= 9;
            }
        }
        sum += digit;
        shouldDouble = !shouldDouble;
    }
    let checkDigit = (10 - (sum % 10)) % 10;
    return checkDigit;
}
const cardNumber = "456126121234";
const checkDigit = calculateLuhnCheckDigit(cardNumber);

console.log("Calculated check digit:", checkDigit);