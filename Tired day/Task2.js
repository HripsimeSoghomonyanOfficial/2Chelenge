function isPalindrome(str) {
  const cleanStr = str.toLowerCase().replace(/[^a-z0-9]/g, "");
  const reversedStr = cleanStr.split("").reverse().join("");
  return cleanStr === reversedStr;
}

console.log(isPalindrome("racecar")); 
console.log(isPalindrome("Madam, in Eden, I'm Adam")); 
console.log(isPalindrome("level"));
console.log(isPalindrome("noon"));
console.log(isPalindrome("hello"));
