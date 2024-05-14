function countVowels(str) {
    str = str.toLowerCase();
    
    let vowelCount = 0;

    for (let i = 0; i < str.length; i++) {
        if (str[i] === 'a' || str[i] === 'e' || str[i] === 'i' || str[i] === 'o' || str[i] === 'u') {
            vowelCount++;
        }
    }

    return vowelCount;
}

// const exampleString = 'Y    he quick brown fox';
// console.log(countVowels(exampleString)); 

// function countVowels(str) {
//     const vowels = ['a', 'e', 'i', 'o', 'u'];
//     return str.toLowerCase().split('').filter(char => vowels.includes(char)).length;
// }

// // Example usage:
// const exampleString = 'The quick brown fox';
// console.log(countVowels(exampleString)); 
