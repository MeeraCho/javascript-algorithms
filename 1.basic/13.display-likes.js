// Q: Write a function called displayLikes that takes in an array of names and returns a string of who likes the post.

// The function should return a string formatted as follows:
// If no one likes it, it should return 'no one likes this'
// If one person likes it, it should return '{name} likes this'
// If two people like it, it should return '{name1} and {name2} like this'
// If three people like it, it should return '{name1}, {name2} and {name3} like this'
// If more than three people like it, it should return '{name1}, {name2} and {x} others like this'


// my solution 
function displayLikes(names) {
    const numOfName = names.length;
    let message = '';

    if (numOfName > 3) {
        message = `${names[0]}, ${names[1]} and ${numOfName - 2} others likes this`
    } else {
        switch (numOfName) {
            case 0:
                message = 'no one likes this'
                break;
            case 1:
                message = `${names[0]} likes this`
                break;
            case 2:
                message = `${names[0]} and ${names[1]} likes this`
                break;
            case 3:
                message = `${names[0]}, ${names[1]} and ${names[2]} likes this`
                break;
            default:
                console.error('please check name array');
        }
    }
    return message;
}

// solution 2
function displayLikes(names) {
    const length = names.length;

    if (length === 0) {
        return 'no one likes this';
    } else if (length === 1) {
        return `${names[0]} likes this`;
    } else if (length === 2) {
        return `${names[0]} and ${names[1]} like this`;
    } else if (length === 3) {
        return `${names[0]}, ${names[1]} and ${names[2]} like this`;
    } else {
        return `${names[0]}, ${names[1]} and ${length - 2} others like this`;
    }
}


const message0 = displayLikes([]) // 'no one likes this'
const message1 = displayLikes(['Peter']) // 'Peter likes this'
const message2 = displayLikes(['Jacob', 'Alex']) // 'Jacob and Alex like this'
const message3 = displayLikes(['Max', 'John', 'Mark']) // 'Max, John and Mark like this'
const message4 = displayLikes(['Alex', 'Jacob', 'Mark', 'Max']) // 'Alex, Jacob and 2 others like this'
const message5 = displayLikes(['Alex', 'Jacob', 'Mark', 'Max', 'Jill']) // 'Alex, Jacob and 3 others like this'


console.log(message0);
console.log(message1);
console.log(message2);
console.log(message3);
console.log(message4);
console.log(message5);
