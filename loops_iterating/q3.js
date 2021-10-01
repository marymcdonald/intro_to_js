let counter = 0;

while (counter = 1) {
  console.log(counter);
  counter += 1;

  if (counter > 2) {
    break;
  }
}

//I think the issue is with assigning counter = 1. Each iteration
//starts with that assignment, so you'll never have counter > 2 –
//it'll always be equal to 2 – so you can never break out of the loop.
