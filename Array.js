//array는 const라도 덮어쓰기 가능 
const myArray = [1, 2, 3, 4];
myArray[0] = 7;  // [7, 2, 3, 4];

//multi-dimensional array 
let myArray = [[1,2],["A","B",7],[["Hi","Ho",2],9, 10]];

//ho만 불러오기 
myArray[2][0][1] //"ho"