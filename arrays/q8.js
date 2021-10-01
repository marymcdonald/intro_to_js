/*function oddLengths(array) {
  let newArray=[];
  array.reduce(function(previous, current){
    if (current.length % 2 === 1) {
      newArray.push(current.length)
    }
  }, 0)
  return newArray;
}*/

//trying to use an array as an accumulator
function oddLengthsV2(array) {
  let newArray= array.reduce(function(prev, element) {
      if(element.length % 2 === 1) {
        prev.push(element.length);
      }
      return prev;
    }, [])
  return newArray;
}

let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];
console.log(oddLengthsV2(arr)); // => [1, 5, 3]
