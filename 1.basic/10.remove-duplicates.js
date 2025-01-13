// Q: Write a function called removeDuplicates that takes in an array and returns a new array with duplicates removed.

function removeDuplicates(arr) {
    const uniqueArr = [];

    for (let i = 0; i < arr.length; i++) {
        if (!uniqueArr.includes(arr[i])) {
            uniqueArr.push(arr[i]);
        }
    }

    return uniqueArr;
}

function removeDuplicates2(arr) {
    return Array.from(new Set(arr));
}

const fruits = ['Apple', 'apple', 'orange', 'Orange', 'apple'];

const result = removeDuplicates(fruits);
const result2 = removeDuplicates2(fruits);

console.log(result);
console.log(result2);