// Q: Write a function called countVowels that takes in a string and returns the number of vowels in the string.

function countVowels(str) {
    const lowerStr = str.toLowerCase();

    let count = 0;

    for (let i = 0; i < lowerStr.length; i++) {
        const char = lowerStr[i]

        if (
            char === 'a' || 
            char === 'e' || 
            char === 'i' || 
            char === 'o' || 
            char === 'u' 
        ) {
            count++;
        }
    }

    return count;
}

const result = countVowels('Helloo'); // 3

console.log(result);


