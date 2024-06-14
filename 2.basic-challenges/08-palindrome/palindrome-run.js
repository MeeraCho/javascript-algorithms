const isPalindrome = require('./palindrome');

const result1 = isPalindrome('racecar'); //true
const result2 = isPalindrome('racecars'); // false 
const result3 = isPalindrome(''); // true
const result4 = isPalindrome('racecar * %#$%#$^#$%'); // true 

console.log(result1, result2, result3, result4);
