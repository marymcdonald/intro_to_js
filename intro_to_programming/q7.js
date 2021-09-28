let foo = ['a', 'b', 'c'];
console.log(foo.length);  // => 3
console.log(foo[3]); // will this result in an error?

//yep. Array indices start at 0 and foo only has
//indices of 0, 1, 2 – no 3.