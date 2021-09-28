let foo = 'bar';
{
  let foo = 'qux';
}

console.log(foo);

//it should log 'bar' to the console
//the other 'foo' variable is block-scoped and the console.log is outside of that block