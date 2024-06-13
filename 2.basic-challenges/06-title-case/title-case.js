//Q: Write a function called titleCase that takes in a string and returns the string with the first letter of each word capitalized.

// --------------------Solution 1 - Using a for loop------------------------
function titleCase(str) {
    // string -> array
    const words = str.toLowerCase().split(' '); // [ 'the', 'quick', 'brown', 'fox' ]

    for (let i = 0; i < words.length; i++) {
        words[i] = words[i][0].toUpperCase() + words[i].slice(1); // 'T' + 'he'
    }
    // array -> string 
    return words.join(' '); 
}

// ------------------Solution 2 - Using a regular expression------------------
// function titleCase(str) {
//     // Replace the first letter of each word with its uppercase equivalent
//     return str.replace(/\b\w/g, (match) => match.toUpperCase());
// }
// * replace - find and replace substrings within a string


module.exports = titleCase;

