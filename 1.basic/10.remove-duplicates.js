// Q: Write a function called removeDuplicates that takes in an array and returns a new array with duplicates removed.

// ---- solution 1 ----
function removeDuplicates(arr) {
    const uniqueArr = [];

    // convert arr to lowercase 
    for(let i = 0; i < arr.length; i++){
        arr[i] =arr[i].toLowerCase();
    }

    // check if item is included in uniqueArr
    for(let i = 0; i < arr.length; i++){
        if(!uniqueArr.includes(arr[i])){
            uniqueArr.push(arr[i]);
        }
    }
    return uniqueArr;
}


// ---- solution 2 -----
function removeDuplicates2(arr) {
    // convert arr to lowercase 
    const lowerCasedArr = arr.map(item => item.toLowerCase());

    // check if item is included in uniqueArr
    return Array.from(new Set(lowerCasedArr));
}


// -------- test -------
const fruits1 = ['Apple', 'apple', 'orange', 'Orange', 'apple'];
const fruits2 = ['Apple', 'apple', 'orange', 'Orange', 'apple'];

const result = removeDuplicates(fruits1);
const result2 = removeDuplicates2(fruits2);

console.log(result);
console.log(result2);