//------------------ Solution 1 -------------------
// split(''): string -> array, (''): each character split
// reverse(): reverse the array
// join(''): array -> string, (''): each character join
function reverseString(str){
    return str.split('').reverse().join('');
}

// ---------------- Solution 2 -------------------

function reverseString(str) {
    // declare a variable to store reversed string
    let reversed = "";
    //loop through the string backwards
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return reversed;
}


module.exports = reverseString;
