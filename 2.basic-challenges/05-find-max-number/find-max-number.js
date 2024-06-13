//Q: Write a function called findMaxNumber that takes in an array of numbers and returns the largest number in the array.

const findMaxNumber = (numArray) => {
    return Math.max(...numArray);
}

const findMaxNumber1 = (numArray) => {
    max = numArray[0];
    for(let i = 0; i < numArray.length; i++){
        if (numArray[i] > max){
            max = numArray[i]
        }
    }
    return max;
}


module.exports = findMaxNumber;

