console.log('5' + 10);

/*this outputs '510' because of implicit coercion. The system can't evaluate
the expression as-is because the values are different types (String, then 
Number), so it coerces 10 to String type. The + sign acts as a concatenation
operation.*/

/* actual answer:
The code logs 510 since every + expression that has a string operand produces 
a string result no matter what the other operand is. 
In other words, the Number 10 gets coerced to a String and then gets 
concatenated to the String '5', which produces '510'.*/
