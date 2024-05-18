const countOccurrences = (str, char) => {
    // let count = 0;

    // ------ using for loop 
    // for(let i = 0; i < str.length; i++){
    //     if (str[i] === char) {
    //         count += 1;
    //     } 
    // }

    // return count;

    // ------ using split()
    //console.log(str.split('')); //'h' 'e' 'l' 'l' 'o'
    // console.log(str.split(char)); //[ 'He', '', 'o' ]
    // console.log(str.split(char).length); // 3
    // console.log(str.split(char).length - 1); // 2

    str.split(char).length - 1;
}

module.exports = countOccurrences;