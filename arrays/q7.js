function sumOfSquares(array) {
  return array.reduce((previous, current) => previous + (current*current),0);
}

let array = [3, 5, 7];
console.log(sumOfSquares(array)); // => 83

/*The first time that callback is called, the previousValue and currentValue can be one of two values:

If an initialValue was supplied in the call to reduce, then previousValue will be equal to initialValue and currentValue will be equal to the first value in the array.

If no initialValue was supplied, then previousValue will be equal to the first value in the array and currentValue will be equal to the second.*/
