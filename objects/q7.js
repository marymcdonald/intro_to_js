let myProtoObj = {
  foo: 1,
  bar: 2,
};

const myObj = Object.create(myProtoObj);
myObj.qux = 3;

let objKeys = Object.keys(myObj);
objKeys.forEach(function(key) {
  console.log(key);
});

//this should print out the keys for myObj, which are foo, bar, qux

for (let key in myObj) {
  console.log(key);
}

//this should print out the key-value pairs, foo:1, bar:2, qux:3

//--both sentences above are incorrect!!

/* solution:
Both snippets iterate over the keys of myObj. However, for..in iterates over all of the object's keys, including those in the prototype object, myProtoObj.
Snippet 1 (forEach) iterates solely over myObj's "own" properties - that is, those defined directly on the object, not its prototype.

additionally: The for...in statement iterates over all enumerable properties of an object that are keyed by strings (ignoring ones keyed by Symbols), including inherited enumerable properties. (MDN documentation)*/
