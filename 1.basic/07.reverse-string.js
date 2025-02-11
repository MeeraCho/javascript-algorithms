// Q: Write a function called `reverseString` that takes in a string and returns the reverse of that string.

// solution 1 
function reverseString(str){
    let reversed = ""; 
    for(let i = str.length - 1; i >= 0; i--){
        reversed += str[i];
    }
    
    return reversed;
}

// solution 2  d
function reverseString(str){
    return str.split('').reverse().join('');
}


const result = reverseString('hello world');

console.log(result); 