let rlSync = require('readline-sync');
let first = rlSync.question("What's your first name?\n");
let last = rlSync.question("What's your last name?\n");

function greet(name) {
  return name;
}

console.log("Hi " + greet(first) + ' ' + greet(last) + '!');

/* guess I didn't fully understand the question
here's their solution:*/

function getName(prompt) {
  let readlineSync = require('readline-sync');
  let name = readlineSync.question(prompt);
  return name;
}

let firstName = getName('What is your first name? ');
let lastName = getName('What is your last name? ');
console.log(`Hello, ${firstName} ${lastName}!`);
