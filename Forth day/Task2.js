function countCharacters(str) {
  const charCount = {};

  for (let char of str) {
    if (charCount[char]) {
      charCount[char]++;
    } else {
      charCount[char] = 1;
    }
  }

  return charCount;
}

const inputString = "hello world";
const result = countCharacters(inputString);
console.log(result);
