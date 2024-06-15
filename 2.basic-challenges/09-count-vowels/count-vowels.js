// Write a function called `countVowels` that takes in a string and returns the number of vowels in the string.
function countVowels(str) {
    count = '';
    const formattedStr = str.toLowerCase();

    for( let i = 0; i < formattedStr.length; i++){
        const char = formattedStr[i];
        if(
            char === 'a' ||
            char === 'e' ||
            char === 'o' ||
            char === 'i' ||
            char === 'u' 
        ){
            count++
        }
    }
    return count;

}

module.exports = countVowels;
