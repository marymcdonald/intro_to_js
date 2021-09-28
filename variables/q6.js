const FOO = 'bar';
{
  const FOO = 'qux';
}

console.log(FOO);

//this shouldn't produce an error because the second FOO is block-scoped
//and this isn't a reassignment

/* it's true! after running it, no error :) */