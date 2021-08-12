Dymanic Programming Practice examples:

Fibonacci: calculate the fib number for a given number input
Grid Traveler: calculate the number of unique ways you can walk through a grid with m columns and n rows.
Can Sum: takes in a target sum and an array of numbers as arguments, lets you know if it's possible to generate the target sum with the numbers available in the array. Returns true/false. Decition Problem
How Sum: takes in a target sum and an array of numbers as arguments. return an array of a combination that adds up to the target sum. Combinatoric problem
Best Sum: takes in a target sum and an array of numbers as arguments. return an array containint the shortest combination of numbers that adds up to the target sum. Optimization problem
Can Construct: takes in a target string and an array of strings the function should return a boolean indication whether of not the target can be made from elements in the array.
Count Construct: what a function that accepts a target string and an array of strings. Return the number of ways the target string can be made from the array.
All Construct: function accepts a target string and array of strings. Should return a 2d array containing all of the ways the target can be constructed be concatenationg elements of the wordbank array. Each element of the 2d array should represent one combination that constructs the target. You may reuse elements of wordbank as many times as needed. 

Memoization Recipe

1. Make it work.
- visualize the problem as a tree
- implement the tree using recursion
- test it

2. Make if efficient.
- add a memo object
- add a base case to return memo values
- store return values into the memo 
