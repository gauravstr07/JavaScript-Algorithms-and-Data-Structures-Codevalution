function isPrime(n) {
  if (n < 2) {
    return "Number is Prime ---> " + false;
  }
  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      return "Number is Prime ---> " + false;
    }
  }
  return "Number is Prime ---> " + true;
}

console.log(isPrime(2));
console.log(isPrime(12));
console.log(isPrime(6));

/**
 * 
 * Number is Prime ---> true
   Number is Prime ---> false
   Number is Prime ---> false
 * 
 */
