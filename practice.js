
function fib( n, memo = {} ) {
    if(memo[n]) return memo[n]
    if( n < 2 ){
        return n 
    }

    memo[n] = fib(n - 1, memo) + fib(n - 2, memo)

    return memo[n]
}


console.log(fib(3)) // => 2

console.log(fib(5)) // => 5

console.log(fib(6)) // => 8

console.log(fib(7)) // => 13

console.log(fib(50)) 