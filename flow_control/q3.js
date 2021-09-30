function evenOrOdd(number) {
  if(Number.isInteger(number)){
      console.log((number%2) === 0 ? 'even':'odd');
  } else {
      console.log('This is not an integer.');
  }
}

evenOrOdd(1.0);
evenOrOdd(2.25);
evenOrOdd(225);
evenOrOdd(100);
