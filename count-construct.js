// brute force

// time: O(n^m * m)

function countConstruct(target, arr, memo = {}) {
    if(target in memo) return memo[target]
    if(target === "") return 1;

    let count = 0;

    for(let chars of arr) {
        if(target.indexOf(chars) === 0){
            count += countConstruct(target.slice(chars.length), arr, memo)
        }
    }

    memo[target] = count 
    return count
}

console.log(countConstruct("purple", ['purp', "p", "ur", "le", "purpl"]))
console.log(countConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd"]))
console.log(countConstruct("skateboard", ["bo", "rd", "ate", "t", "ska", "sk", "boar"]))
console.log(countConstruct("enterapotentpot", ["a", "p", "ent", "enter", "ot", "o", "t"]))
console.log(countConstruct("eeeeeeeeeeeeeeeeeeeeeeeeeeeef", ["e", "ee", "eee", "eeeee", "eeeeeee", "eeeeeeeee", "eeeeeeeeeee"]))