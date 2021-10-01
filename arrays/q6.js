function oddLengths(array) {
  let newArray = array.map(element => element.length);
  return newArray.filter(item => item % 2 === 1);
}

let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];
console.log(oddLengths(arr)); // => [1, 5, 3]
