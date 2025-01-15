//write a function called fizzBuzzArray that takes in a number and returns an array. The array should contain all the numbers from 1 to the number passed in. However, if the number is divisible by 3, you should replace the number with "Fizz". If the number is divisible by 5, you should replace the number with "Buzz". If the number is divisible by both 3 and 5, you should replace the number with "FizzBuzz".


function fizzBuzzArray(num){
    newfizzBuzzArray = [];

    for(let i = 1; i <= num; i++){
        if(i % 5 === 0 && i % 3 === 0){
            newfizzBuzzArray.push('fizzbuzz');
        } else if (i % 5 === 0) {
            newfizzBuzzArray.push('buzz');
        } else if (i % 3 === 0) {
            newfizzBuzzArray.push('fizz');
        } else {
            newfizzBuzzArray.push(i);
        }
    }

    return newfizzBuzzArray;
    
}

const result = fizzBuzzArray(15);
console.log(result);

// [
//     1,          2,
//     'fizz',     4,
//     'buzz',     'fizz',
//     7,          8,
//     'fizz',     'buzz',
//     11,         'fizz',
//     13,         14,
//     'fizzbuzz'
// ]
