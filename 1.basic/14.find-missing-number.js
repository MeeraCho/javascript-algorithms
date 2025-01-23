// Q: Write a function called findMissingNumber that takes in an array of unique numbers from 1 to n (inclusive), where one number is missing. It should return the missing number.

//my solution
function findMissingNumber1(numbers) {
    let missingNumber = -1;

    for (let i = 1; i <= numbers.length + 1; i++) {
        if (!numbers.includes(i)) {
            missingNumber = i
            break;
        }
    }

    return missingNumber;
}


//solution 2
function findMissingNumber2(arr) {
    // check if it's an array 
    if (!arr || arr.length === 0) {
        return undefined;
    }

    const n = arr.length + 1; 
    const expectedSum = (n * (n + 1)) / 2;

    let actualSum = 0;
    for (let i = 0; i < arr.length; i++) {
        actualSum += arr[i];
    }

    return expectedSum - actualSum;
}

// solution 2 - using reduce
function findMissingNumber3(arr) {
    // check if it's an array 
    if (!arr || arr.length === 0) {
        return undefined;
    }

    // number of items in array
    const n = arr.length + 1;
    const expectedSum = (n * (n + 1)) / 2;

    const actualSum = arr.reduce((sum, num) => sum + num, 0);

    return expectedSum - actualSum;
}






const result1 = findMissingNumber1([1, 2, 3, 4, 6, 7, 8, 9, 10]); // 5
const result2 = findMissingNumber2([10, 8, 6, 7, 5, 4, 2, 3, 1]); // 9
const result3 = findMissingNumber3([10, 5, 1, 2, 4, 6, 8, 3, 9]); // 7

console.log(result1);
console.log(result2);
console.log(result3);



