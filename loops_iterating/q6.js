function factorial(number) {
  if (number < 3) return number;
  return number*factorial(number - 1);
}

console.log(factorial(2));
console.log(factorial(3));
console.log(factorial(4));
console.log(factorial(5));
console.log(factorial(6));
console.log(factorial(7));
console.log(factorial(8));
