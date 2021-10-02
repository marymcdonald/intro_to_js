let obj = {
  b: 2,
  a: 1,
  c: 3,
};

let arr = [];

Object.keys(obj).forEach((key, i) => {
  arr.push(key.toUpperCase());
});

console.log(arr);
