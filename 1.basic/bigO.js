// Q: Suppose we want to write a function that calculates the sum of all numbers from 1 up to (and including) some number n.  

// If you came up with these two solutions below, you're going to think about which one is better? 

// * solution 1
function addUpTo(n) {
    total = 0;
    for(let i=1; i<=n; i++){
        total+=i;
    }
    return total;
}

console.log(addUpTo(5));

// * solution 2
function addUpTo(n){
    return n * (n+1) / 2;
}

// what dose better mean before decided it? 
// 1. faster? -speed
// 2. less memory -intensive? -space
// 3. more readable, legible? - readability 
// among them SPEED, SPACE are important. 


// Let's focus on evaluating Speed. 


