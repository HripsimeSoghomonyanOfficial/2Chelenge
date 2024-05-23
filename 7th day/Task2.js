function insertionSort(arr) {
  let sortedArray = arr.slice();

  for (let i = 1; i < sortedArray.length; i++) {
    let key = sortedArray[i];
    let j = i - 1;

    while (j >= 0 && sortedArray[j] > key) {
      sortedArray[j + 1] = sortedArray[j];
      j--;
    }
    sortedArray[j + 1] = key;
  }

  return sortedArray;
}

const inputArray = [5, 2, 9, 1, 5, 6];
const sortedArray = insertionSort(inputArray);
console.log(sortedArray);
