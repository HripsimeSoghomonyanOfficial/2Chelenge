function createIndexedArray(arr) {
    const result = new Array(100).fill(undefined);
    
    arr.forEach(value => {
        result[value] = value;
    });

    while (result[result.length - 1] === undefined) {
        result.pop();
    }
    
    return result;
}

console.log(createIndexedArray([4, 3, 0, 9]));
console.log(createIndexedArray([26, 30, 19, 5]));