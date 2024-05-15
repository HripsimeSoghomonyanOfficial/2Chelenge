function findBiggestNumber(array) {
  if (array.length === 0) {
    return "Array is empty";
  }
  let biggestNumber = array[0];
  for (let i = 1; i < array.length; i++) {
    if (array[i] > biggestNumber) {
      biggestNumber = array[i];
    }
  }

  return biggestNumber;
}
const exampleArray = [1, 4, 55, 66, 89];
const biggestNumber = findBiggestNumber(exampleArray);
console.log("Biggest number:", biggestNumber);
