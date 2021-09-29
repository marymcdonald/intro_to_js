let rlSync = require('readline-sync');
let number1 = parseFloat(rlSync.question('Enter the first number: '));
let number2 = parseFloat(rlSync.question('Enter the second number: '));

function multiply(num1, num2) {
  return num1*num2;
}

console.log(`${number1} * ${number2} = ${multiply(number1, number2)}`);
