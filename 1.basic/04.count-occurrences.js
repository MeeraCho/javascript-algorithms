// Q: Write a function called countOccurrences() that takes in a string and a character and returns the number of occurrences of that character in the string.

// function countOccurrences(str, char){
//     return str.split(char).length - 1;
// }

function countOccurrences(str, char){
    let count = 0;
    for( let i = 0; i < str.length; i++){
        if (char === str[i]){
            count++;
        }
    }
    return count;
}

const result = countOccurrences('Helloll', 'l');

console.log(result); 