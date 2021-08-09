// brute force
// m = word.length
// n = arr.length

// time: O(n^m * m)
// space: O(m^2)

// function canConstruct(word, arr) {
//     if(word === '') return true

//     for(let chars of arr) {
//         if(word.indexOf(chars) === 0 ){
//             const suffix = word.slice(chars.length);
//             if(canConstruct(suffix, arr)) {
//                 return true
//             }
//         }
//     }

//     return false 
// }

// memoized solution
// time: O(n * m^2)
// space: O(m^2)

function canConstruct(word, arr, memo = {}) {
    if(word in memo) return memo[word]
    if(word === '') return true

    for(let chars of arr) {
        if(word.indexOf(chars) === 0 ){
            const suffix = word.slice(chars.length);
            if(canConstruct(suffix, arr, memo)) {
                memo[word] = true
                return memo[word]
            }
        }
    }

    memo[word] = false 
    return memo[word]
}

console.log(canConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd"]))
console.log(canConstruct("skateboard", ["bo", "rd", "ate", "t", "ska", "sk", "boar"]))
console.log(canConstruct("enterapotentpot", ["a", "p", "ent", "enter", "ot", "o", "t"]))
console.log(canConstruct("eeeeeeeeeeeeeeeeeeeeeeeeeeeef", ["e", "ee", "eee", "eeeee", "eeeeeee", "eeeeeeeee", "eeeeeeeeeee"]))