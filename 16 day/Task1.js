function sortLettersAlphabetically(randomLetters) {
    return randomLetters.split('').sort().join('');
}

const randomLetters = "qwertyuiopasdfghjklzxcvbnm";
const sortedLetters = sortLettersAlphabetically(randomLetters);
console.log(sortedLetters); 