let objToCopy = {
  foo: 1,
  bar: 2,
  qux: 3,
};

function copyObj(obj, arr) {
  let newO = {};

  if (arr === undefined) {
    for(const key in obj) {
      newO[key] = obj[key];
    }
  } else {
      for (let i=0; i < arr.length; i += 1){
        newO[arr[i]] = obj[arr[i]];
      }
  }
  return newO;
}

let newObj = copyObj(objToCopy);
console.log(newObj);        // => { foo: 1, bar: 2, qux: 3 }

let newObj2 = copyObj(objToCopy, [ 'foo', 'qux' ]);
console.log(newObj2);       // => { foo: 1, qux: 3 }

let newObj3 = copyObj(objToCopy, [ 'bar' ]);
console.log(newObj3);       // => { bar: 2 }
