function swapFirstAndLast(arr) {
    if (arr.length < 2) {
        return arr; 
    }
    let newArr = arr.slice();
    let temp = newArr[0];
    newArr[0] = newArr[newArr.length - 1];
    newArr[newArr.length - 1] = temp;
    
    return newArr;
}

console.log(swapFirstAndLast([1, 2, 3, 4, 5]));
console.log(swapFirstAndLast([10, 20, 30]));
console.log(swapFirstAndLast([7]));
console.log(swapFirstAndLast([]));
