function isValidBraces(s) {
    const matchingBraces = {
        '(': ')',
        '{': '}',
        '[': ']'
    };
    
    const stack = [];
    
    for (let char of s) {
        if (matchingBraces[char]) {
            stack.push(char);
        } else {
            const top = stack.pop();
            if (matchingBraces[top] !== char) {
                return false;
            }
        }
    }
    return stack.length === 0;
}

console.log(isValidBraces("{[[({})]]}"));
console.log(isValidBraces("(){}[]")); 
console.log(isValidBraces("([{}])")); 
console.log(isValidBraces("(}")); 
console.log(isValidBraces("[(])"));
console.log(isValidBraces("[({})](]")); 
console.log(isValidBraces("({)[]}")); 