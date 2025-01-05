// function findMaxNumber(arr){
//     return Math.max(...arr);
// }

function findMaxNumber(arr){
    let max = arr[0]; 
    for(let i = 1; i < arr.length; i++){
        if( arr[i] > max ){
            max = arr[i];
        }
    }
    return max;
}

const result = findMaxNumber([2, 1, 9, 16, 10]);

console.log(result);