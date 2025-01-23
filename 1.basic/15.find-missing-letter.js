// Q: Write a function called findMissingLetter that takes in an array of consecutive (increasing) letters as input and returns the missing letter in the array.


function findMissingLetter(arr) {
    // Define the full alphabet string, including both lowercase and uppercase letters.
    const alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';

    // Find the starting index of the given array's first letter in the alphabet string.  indexOf(): find the index (position) of the first occurrence of a specified value in a string or an array
    const startIndex = alphabet.indexOf(arr[0]);

    // Loop through the input array to compare each letter with the corresponding letter in the alphabet.
    for (let i = 0; i < arr.length; i++) {
        // Check if the current letter in the array doesn't match the expected letter in the alphabet.
        if (arr[i] !== alphabet[startIndex + i]) {
            // If there's a mismatch, return the expected letter (the missing one).
            return alphabet[startIndex + i];
        }
    }

    // If no missing letter is found, return an empty string (this shouldn't happen if the input is valid).
    return '';
}




const result1 = findMissingLetter(['a', 'b', 'c', 'd', 'f']); // => "e"
const result2 = findMissingLetter(['O', 'Q', 'R', 'S']); // => "P"
const result3 = findMissingLetter(['t', 'u', 'v', 'w', 'x', 'z']); // => "y"

console.log(result1);
console.log(result2);
console.log(result3);