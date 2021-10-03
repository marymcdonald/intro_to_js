function negativeZero(value){
  if (-Infinity/value === Infinity && Number.isNaN(0/value)){
    return true;
  } else {
    return false;
  }
}

/*const test = -0;
const testest = 0;

console.log(typeof(test));
console.log(typeof(testest));

console.log(test/testest);
console.log(testest/test);
console.log(-Infinity/-0);
console.log(-Infinity/0);*/

console.log(negativeZero(-0));
console.log(negativeZero(-1));
console.log(negativeZero(0));
console.log(negativeZero(2));
