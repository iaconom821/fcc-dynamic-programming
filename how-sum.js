// brute force solution:
// time: O(n^m * m)
// space: O(m)

// function howSum(n, arr) {
//     if(n === 0) return [];
//     if(n < 0) return null;
//     for (let num of arr) {
//         const remainder = n - num;
//         const remResult = howSum(remainder, arr);
//         if(remResult !== null){
//             return [...remResult, num];
//         }
//     }

//     return null;
// }

// memoized solution
// time: O(n * m^2)
// space: O(m^2)

function howSum(n, arr, memo = {}) {
    if(n in memo) return memo[n];
    if(n === 0) return [];
    if(n < 0) return null;
    for (let num of arr) {
        const remainder = n - num;
        const remResult = howSum(remainder, arr, memo);
        if(remResult !== null){
            memo[n] = [...remResult, num];
            return memo[n]
        }
    }

    memo[n] = null
    return null;
}
console.log(howSum(7, [2, 3])) 
console.log(howSum(7, [5, 3, 4, 7])) 
console.log(howSum(7, [2, 4])) 
console.log(howSum(8, [2, 3, 5])) 
console.log(howSum(300, [7, 14])) 
