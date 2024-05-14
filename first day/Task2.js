function reverseWords(sentence) {
    const words = sentence.split(' ');
    const reversedWords = words.map(word => {
        return word.split('').reverse().join('');
    });

    const reversedSentence = reversedWords.join(' ');
    return reversedSentence;
}

const exampleSentence = "Welcome to this Javascript Guide!";
console.log(reverseWords(exampleSentence)); 