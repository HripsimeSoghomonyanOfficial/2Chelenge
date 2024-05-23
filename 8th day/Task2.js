function findNumbersInText(text) {
    const numberRegex = /\d+/g;
    let match;
    let results = [];
    
    while ((match = numberRegex.exec(text)) !== null) {
        results.push({
            number: parseInt(match[0], 10),
            index: match.index
        });
    }

    return results;
}

const text = "This is a sample text with numbers like 123 and 4567 and also 89.";
const numbersWithIndices = findNumbersInText(text);

console.log(numbersWithIndices);
