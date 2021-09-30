function longCaps(str){
  if(str.length > 10) {
    return str.toUpperCase();
  } else {
    return str;
  }
}

console.log(longCaps('marymary'));
console.log(longCaps('hello there Vincent'));
