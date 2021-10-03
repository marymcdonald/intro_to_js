function doSomething(string) {
  return string.split(' ').reverse().map((value) => value.length);
}

//this function takes a string, makes an array with each of the words as values,
//reverses their order, then replaces them with their number of characters
