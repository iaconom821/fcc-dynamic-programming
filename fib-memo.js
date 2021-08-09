//memoization 
// js object, keys will be the arg to the fn, value will be the return value



function fib(num, memo = {}) {
    if(num in memo) return memo[num]
    if (num < 2) {
        return num
    }
    memo[num] = (fib(num - 1, memo) + fib(num - 2, memo));
    return memo[num]
}


console.log(fib(6))
console.log(fib(7))
console.log(fib(8))
console.log(fib(50))