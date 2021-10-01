function factorial(number) {
  let result = 1;
  for(let i = 1; i < number + 1; i += 1){
    result *= i;
  }
  return result;
}

console.log(factorial(1));
console.log(factorial(2));
console.log(factorial(3));
console.log(factorial(4));
console.log(factorial(5));
