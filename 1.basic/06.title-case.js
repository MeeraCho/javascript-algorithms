//Q: Write a function called titleCase that takes in a string and returns the string with the first letter of each word capitalized.

function titleCase(str){
    const newStr = str.toLowerCase().split(' ')
    
    for (let i = 0; i < newStr.length; i++){
        newStr[i] = newStr[i][0].toUpperCase() + newStr[i].slice(1);
    }

    return newStr.join(' ');
}

function titleCase(str) {
    // Replace the first letter of each word with its uppercase equivalent
    return str.replace(/\b\w/g, (match) => match.toUpperCase());
}


const result = titleCase('the quick brown fox');
console.log(result);


titleCase("I'm a little tea pot"); // I'm A Little Tea Pot
titleCase('sHoRt AnD sToUt'); // Short And Stout
titleCase('HERE IS MY HANDLE HERE IS MY SPOUT'); // Here Is My Handle Here Is My Spout
