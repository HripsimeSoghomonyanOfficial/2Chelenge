// Unshift
    Array.prototype.myUnshift = function(...elements) {
        this.splice(0, 0, ...elements);
        return this.length;
    };

    let arr = [3, 4, 5];
    arr.myUnshift(1, 2);
    console.log(arr);

// // Shift

// Array.prototype.myShift = function() {
//     return this.splice(0, 1)[0];
// };

// let arr = [1, 2, 3];
// let first = arr.myShift();
// console.log(arr);
// console.log(first);

// // Pop

// Array.prototype.myPop = function() {
//     return this.splice(this.length - 1, 1)[0];
// };

// let arr = [1, 2, 3];
// let last = arr.myPop();
// console.log(arr);
// console.log(last);

// // Push

// Array.prototype.myPush = function(...elements) {
//     this.splice(this.length, 0, ...elements);
//     return this.length;
// };

// let arr = [1, 2];
// arr.myPush(3, 4);
// console.log(arr);

// // forEach

// Array.prototype.myForEach = function(callback, thisArg) {
//     for (let i = 0; i < this.length; i++) {
//         if (i in this) {
//             callback.call(thisArg, this[i], i, this);
//         }
//     }
// };
// let arr = [1, 2, 3];
// arr.myForEach((element) => console.log(element * 2));

// // findIndex

// Array.prototype.myFindIndex = function(predicate, thisArg) {
//     for (let i = 0; i < this.length; i++) {
//         if (i in this && predicate.call(thisArg, this[i], i, this)) {
//             return i;
//         }
//     }
//     return -1;
// };

// let arr = [1, 2, 3, 4];
// let index = arr.myFindIndex((element) => element > 2);
// console.log(index);

// // find

// Array.prototype.myFind = function(predicate, thisArg) {
//     for (let i = 0; i < this.length; i++) {
//         if (i in this && predicate.call(thisArg, this[i], i, this)) {
//             return this[i];
//         }
//     }
//     return undefined;
// };

// let arr = [1, 2, 3, 4];
// let element = arr.myFind((element) => element > 2);
// console.log(element);

// // every

// Array.prototype.myEvery = function(predicate, thisArg) {
//     for (let i = 0; i < this.length; i++) {
//         if (i in this && !predicate.call(thisArg, this[i], i, this)) {
//             return false;
//         }
//     }
//     return true;
// };

// let arr = [1, 2, 3, 4];
// let allGreaterThanZero = arr.myEvery((element) => element > 0);
// console.log(allGreaterThanZero);

// // some

// Array.prototype.mySome = function(predicate, thisArg) {
//     for (let i = 0; i < this.length; i++) {
//         if (i in this && predicate.call(thisArg, this[i], i, this)) {
//             return true;
//         }
//     }
//     return false;
// };

// let arr = [1, 2, 3, 4];
// let anyGreaterThanThree = arr.mySome((element) => element > 3);
// console.log(anyGreaterThanThree);

// map

// Array.prototype.myMap = function(callback, thisArg) {
//     let result = [];
//     for (let i = 0; i < this.length; i++) {
//         if (i in this) {
//             result[i] = callback.call(thisArg, this[i], i, this);
//         }
//     }
//     return result;
// };

// let arr = [1, 2, 3];
// let doubled = arr.myMap((element) => element * 2);
// console.log(doubled);

// // filter

// Array.prototype.myFilter = function(predicate, thisArg) {
//     let result = [];
//     for (let i = 0; i < this.length; i++) {
//         if (i in this && predicate.call(thisArg, this[i], i, this)) {
//             result.push(this[i]);
//         }
//     }
//     return result;
// };

// let arr = [1, 2, 3, 4];
// let greaterThanTwo = arr.myFilter((element) => element > 2);
// console.log(greaterThanTwo);

// // reduce

// Array.prototype.myReduce = function (callback, initialValue) {
//   let accumulator = initialValue !== undefined ? initialValue : this[0];
//   let startIndex = initialValue !== undefined ? 0 : 1;

//   for (let i = startIndex; i < this.length; i++) {
//     if (i in this) {
//       accumulator = callback(accumulator, this[i], i, this);
//     }
//   }
//   return accumulator;
// };
// let arr = [1, 2, 3, 4];
// let sum = arr.myReduce((acc, curr) => acc + curr, 0);
// console.log(sum);

// // slice

// Array.prototype.mySlice = function(start, end) {
//     let result = [];
//     start = start < 0 ? Math.max(this.length + start, 0) : Math.min(start, this.length);
//     end = end === undefined ? this.length : (end < 0 ? Math.max(this.length + end, 0) : Math.min(end, this.length));

//     for (let i = start; i < end; i++) {
//         if (i in this) {
//             result.push(this[i]);
//         }
//     }
//     return result;
// };

// let arr = [1, 2, 3, 4, 5];
// let sliced = arr.mySlice(1, 3);
// console.log(sliced);

// // splice

// Array.prototype.mySlice = function(start, end) {
//     let result = [];
//     start = start < 0 ? Math.max(this.length + start, 0) : Math.min(start, this.length);
//     end = end === undefined ? this.length : (end < 0 ? Math.max(this.length + end, 0) : Math.min(end, this.length));

//     for (let i = start; i < end; i++) {
//         if (i in this) {
//             result.push(this[i]);
//         }
//     }
//     return result;
// };

// let arr = [1, 2, 3, 4, 5];
// let sliced = arr.mySlice(1, 3);
// console.log(sliced);

// // flat

// Array.prototype.myFlat = function(depth = 1) {
//     let result = [];

//     (function flat(arr, depth) {
//         for (let item of arr) {
//             if (Array.isArray(item) && depth > 0) {
//                 flat(item, depth - 1);
//             } else {
//                 result.push(item);
//             }
//         }
//     })(this, depth);

//     return result;
// };

// let arr = [1, [2, [3, [4]]]];
// let flattened = arr.myFlat(2);
// console.log(flattened);
