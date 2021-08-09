// brute force solution:
// n = n
// m = arr.length

// time: O(m^n * n)
// space: O(n^2)

// function bestSum(n, arr) {
//     if( n === 0 ) return [];
//     if( n < 0 ) return null;

//     let shortestCombo = null;

//     for(let num of arr) {
//         const remainder = n - num;
//         const remResult = bestSum(remainder, arr);
//         if(remResult !== null) {
//             const combo = [ ...remResult, num ];
//             if( shortestCombo === null || combo.length < shortestCombo.length){
//                 shortestCombo = combo;
//             }
//         }
//     }

//     return shortestCombo
// }

// memoized

// time: O(n^2 * m)
// space: O(n^2)

function bestSum(n, arr, memo = {}) {
    if(n in memo) return memo[n]
    if( n === 0 ) return [];
    if( n < 0 ) return null;

    let shortestCombo = null;

    for(let num of arr) {
        const remainder = n - num;
        const remResult = bestSum(remainder, arr, memo);
        if(remResult !== null) {
            const combo = [ ...remResult, num ];
            if( shortestCombo === null || combo.length < shortestCombo.length){
                shortestCombo = combo;
            }
        }
    }

    memo[n] = shortestCombo
    return memo[n]
}

console.log(bestSum(7, [5, 3, 4, 7]));
console.log(bestSum(7, [2, 3, 5]));
console.log(bestSum(8, [1, 4, 5]));
console.log(bestSum(100, [1, 2, 5, 25]));