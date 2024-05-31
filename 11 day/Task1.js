function largestUniqueDivisibleBy3(arr) {
    const frequencyMap = new Map();
    for (let num of arr) {
        frequencyMap.set(num, (frequencyMap.get(num) || 0) + 1);
    }

    const uniqueDivisibleBy3 = arr.filter(num => frequencyMap.get(num) === 1 && num % 3 === 0);
    if (uniqueDivisibleBy3.length === 0) {
        return -1;
    } else {
        return Math.max(...uniqueDivisibleBy3);
    }
}

const arr1 = [1, 3, 4, 5, 64];
const arr2 = [3, 6, 9, 12, 18, 3, 9];

console.log(largestUniqueDivisibleBy3(arr1)); 
console.log(largestUniqueDivisibleBy3(arr2));