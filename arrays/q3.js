let myArray = [
  [1, 3, 6, 11],
  [4, 2, 4],
  [9, 17, 16, 0],
];

myArray.forEach(element => {
  console.log(element.filter(item => item % 2 === 0));
});
