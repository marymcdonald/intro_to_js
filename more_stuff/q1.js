let array1 = [1, 2, 3];
let array2 = array1;
array1[1] = 4;
console.log(array2);

//this logs [1, 4, 3] since array1[1] is mutating the array that both
//array1 & array2 are pointing to
