{
  let foo = 'bar';
}

console.log(foo);

//we get a reference error because foo is block-scoped and not defined outside of
//the curly braces (the block)

/*The program outputs an error since foo is out of scope: the let statement 
creates variables with block scope, which limits the visibility of the variable to 
the block.
*/