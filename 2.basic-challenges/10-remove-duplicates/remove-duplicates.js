// Write a function called `removeDuplicates` that takes in an array and returns a new array with duplicates removed.

//--------------Solution 1 ------------------
// function removeDuplicates(arr) {
//     const uniqueArr = [];
//     for(let i = 0; i < arr.length; i++){
//         if (!uniqueArr.includes(arr[i])){
//             uniqueArr.push(arr[i])
//         }
//     }
//     return uniqueArr;
// }

//--------------Solution 2 ------------------
function removeDuplicates(arr) {
    return Array.from(new Set(arr)); // Array.from: object -> array 
}

module.exports = removeDuplicates;
