// brute force solution

// function canSum(n, arr) {
//     if(n === 0) return true;
//     if(n < 0) return false;
//     for(let num of arr) {
//         const remainder = n - num;
//         if(canSum(remainder, arr) === true){
//             return true
//         }
//     }
//     return false 
// }

// memoized solution

function canSum(n, arr, memo = {}) {
    if(n in memo) return memo[n];
    if(n === 0) return true;
    if(n < 0) return false;
    for(let num of arr) {
        const remainder = n - num;
        if(canSum(remainder, arr, memo) === true){
            memo[n] = true
            return memo[n]
        }
    }
    memo[n] = false 
    return memo[n]
}

console.log(canSum(7, [2, 3])); //true
console.log(canSum(7, [5, 3, 4, 7]));
console.log(canSum(7, [2, 4]));
console.log(canSum(8, [2, 3, 5]));
console.log(canSum(300, [7, 14]));