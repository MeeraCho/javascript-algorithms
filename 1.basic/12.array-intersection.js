// Q: Write a function called arrayIntersection that takes in two arrays and returns an array containing the intersection of the two input arrays (i.e., the common elements that appear in both arrays).

//--------solution 1------------------
function arrayIntersection(arr1, arr2) {
    const intersection = [];

    for (let i = 0; i < arr1.length; i++) {
        if (arr2.includes(arr1[i]) && !intersection.includes(arr1[i])) {
            intersection.push(arr1[i]);
        }
    }

    return intersection;
}


// //--------solution 2------------------
function arrayIntersection2(arr1, arr2) {
    const set1 = new Set(arr1);
    const intersection = [];

    for (let num of arr2) {
        if (set1.has(num)) {
            intersection.push(num);
        }
    }

    return intersection;
}


// //--------solution 3------------------
function arrayIntersection3(arr1, arr2) {
    let intersectionArr = [];
    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr2.length; j++) {
            if (arr1[i] === arr2[j]) {
                intersectionArr.push(arr1[i]);
            }
        }
    }

    return intersectionArr;
}


const result1 = arrayIntersection([1, 2, 3, 4, 5], [1, 3, 5, 7, 9]); // should return [1, 3, 5]
const result2 = arrayIntersection2([1, 1, 1, 1, 1], [2, 2, 2, 2, 2]); // should return []
const result3 = arrayIntersection3([1, 2, 3, 4, 5], [5, 4, 3, 2, 1]); // should return [1, 2, 3, 4, 5]

console.log(result1);
console.log(result2);
console.log(result3);

