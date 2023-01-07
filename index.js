function factorial(n) {
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result = result * i;
  }
  return "factorial is ---> " + result;
}

console.log(factorial(0));
console.log(factorial(2));
console.log(factorial(2));
console.log(factorial(3));
console.log(factorial(5));
console.log(factorial(6));

/** output
 * 
 * factorial is ---> 1
   factorial is ---> 2
   factorial is ---> 2
   factorial is ---> 6
   factorial is ---> 120
   factorial is ---> 720
 * 
 */
