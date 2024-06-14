// Q: Write a function called `isPalindrome` that takes in a string and returns `true` if the string is a palindrome and `false` if it is not.

// - The input string will only contain lowercase letters and spaces
// - The function should ignore spaces when checking if the string is a palindrome

// A palindrome is a word, phrase, number, or other sequence of characters which reads the same backward or forward. An example of a palindrome is "madam". 


// ---------------------solution 1----------------------------
function isPalindrome(str) {
    //remove NOT alphabet and numbers 
    const formattedStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    const reversedStr = formattedStr.split('').reverse().join('');
    return formattedStr = reversedStr;
}

// ---------------------solution 2----------------------------
function isPalindrome(str) {
    const formattedStr = removeNonAlphanumeric(str.toLowerCase());
    const reversedStr = reverseString(formattedStr);
    return formattedStr === reversedStr;
}

// Helper functions
function removeNonAlphanumeric(str) {
let formattedStr = '';
for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (isAlphaNumeric(char)) {
    formattedStr += char;
    }
}
return formattedStr;
}

function isAlphaNumeric(char) {
const code = char.charCodeAt(0);
return (
    (code >= 48 && code <= 57) || // Numbers 0-9
    (code >= 97 && code <= 122) // Lowercase letters a-z
);
}

function reverseString(str) {
let reversed = '';
for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
}
return reversed;
}


module.exports = isPalindrome;
