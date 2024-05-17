function sumOfPositiveNumbers(numbers) {
    return numbers.reduce((sum, num) => {
        return num > 0 ? sum + num : sum;
    }, 0);
}

const numbers = [-2, 3, 5, -1, 0, 7, -6];
const result = sumOfPositiveNumbers(numbers);
console.log(`The sum of positive numbers is: ${result}`);
