"foo" //primitive
3.1415 //primitive
[ 'a', 'b', 'c' ] //object
false //primitive
foo //neither
function bar() { return "bar"; } //neither -- incorrect, see below
undefined //primitive
{ a: 1, b: 2 } //object

/* function bar() { return "bar"; } (functions are objects)*/
