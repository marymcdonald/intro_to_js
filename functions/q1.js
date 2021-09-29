let bar = 1;
function foo() {
  let bar = 2;
}

foo();
console.log(bar);

//I think this should log 1. The bar variable in foo is separate to the foo
//function and would not change the bar variable declared outside the foo
//function.
