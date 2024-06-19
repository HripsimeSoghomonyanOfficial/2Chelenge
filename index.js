Array.prototype.myFlat = function(depth = 1) {
    let result = [];
    (function flat(arr, depth) {
        for (let item of arr) {
            if (Array.isArray(item) && depth > 0) {
                flat(item, depth - 1);
            } else {
                result.push(item);
            }
        }
    })(this, depth);
    return result;
};
let arr = [1, [2, [3, [4]]]];
let flattened = arr.myFlat(2);
console.log(flattened);
