function isNotANumber(value){
  //if NaN - true, otherwise false
  if(value !== value){
    return true;
  } else {
    return false;
  }
}

//found in MDN documentation:
//NaN, and only NaN, will compare unequal to itself.

console.log(isNotANumber(NaN));
console.log(isNotANumber(null));
console.log(isNotANumber(false));
console.log(isNotANumber(undefined));
console.log(isNotANumber(true));
