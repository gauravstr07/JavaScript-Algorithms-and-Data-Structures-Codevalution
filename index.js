function fibonacci(n) {
  const fib = [0, 1];
  for (let i = 2; i < n; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }
  return "Fibonacci  --> " + fib;
}

console.log(fibonacci(5));
console.log(fibonacci(8));
console.log(fibonacci(9));

/** output
 * 
 * Fibonacci  --> 0,1,1,2,3
   Fibonacci  --> 0,1,1,2,3,5,8,13
   Fibonacci  --> 0,1,1,2,3,5,8,13,21
 * 
 */
