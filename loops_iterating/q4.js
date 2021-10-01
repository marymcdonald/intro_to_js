for (let i = 0; i < 5;) {
  console.log(i += 1);
}

/* should log
1
2
3
4
5
*/

//mdn documention mentions that "All three expressions in the head of the for loop are optional.", so there shouldn't be an error.
