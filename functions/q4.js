function scream(words) {
  words = words + '!!!!';
  return;
  console.log(words);
}

scream('Yipeee');

//should print Yipeee!!!!

/* it does not! It should be nothing because...
does return end the function call?

Correct: It doesn't log anything. The return on line 3 terminates the function before it can log anything.*/
