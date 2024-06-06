function removeDuplicates(arr) {
    return [...new Set(arr)];
}

console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5]));
console.log(removeDuplicates([5, 5, 5, 5, 5]));
console.log(removeDuplicates([1, 1, 2, 3, 3, 4, 4, 4]));
console.log(removeDuplicates([0, 0, 0, 0, 0]));