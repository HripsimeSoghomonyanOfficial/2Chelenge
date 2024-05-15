function findEvenNumbersGreaterThanTen(array) {
  const result = array.filter((num) => num > array.length - 1 && num % 2 === 0);

  return result;
}

const exampleArray = [1, 33, 44, 5, 6, 77, 89, 102];
const evenNumbersGreaterThanTen = findEvenNumbersGreaterThanTen(exampleArray);
console.log(evenNumbersGreaterThanTen);
