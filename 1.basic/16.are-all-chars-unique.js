// Q: Write a function called areAllCharactersUnique that takes in a string and returns true or false depending on whether all characters in the string are unique (i.e., no character is repeated).

function areAllCharactersUnique(str){
    for(let i = 0; i < str.length; i++){
        for(let j = 1; j < str.length; j++){
            if(str[i] === str[j]){
                return false;
            }
        }
    }
    return true;
}



result1 = areAllCharactersUnique('abcdefg'); // true
// areAllCharactersUnique('abcdefgA'); // true
// areAllCharactersUnique('programming'); // false
// areAllCharactersUnique(''); // true
// areAllCharactersUnique('a'); // true

console.log(result1);