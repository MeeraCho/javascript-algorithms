// Q: Write a function called countOccurrences() that takes in a string and a character and returns the number of occurrences of that character in the string.

// ------------Solution 1------------
const countOccurrences = (str, char) => {    
    let count = 0;
    for(let i = 0; i < str.length; i++){
        if (str[i] === char) {
            count += 1;
        } 
    }
    return count;
}

// ------------Solution 2------------
// const countOccurrences = (str, char) => {  
//     str.split(char).length - 1;
// }

// console.log(str.split('')); //['h' 'e' 'l' 'l' 'o']
// console.log(str.split(char)); //[ 'He', '', 'o' ] 
// console.log(str.split(char).length); // 3
// console.log(str.split(char).length - 1); // 2

module.exports = countOccurrences;


