function isArrayEmpty(arr) {
  if (arr) {
    console.log('Not Empty');
  } else {
    console.log('Empty');
  }
}

isArrayEmpty([]);

//I think this might output 'Not Empty' since it's not the same
//as the empty string or Null, NaN, etc.

/*correct, since the empty array is not falsy*/
