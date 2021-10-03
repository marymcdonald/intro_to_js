let words = [
  'laboratory',
  'experiment',
  'flab',
  'Pans Labyrinth',
  'elaborate',
  'polar bear',
];

function allMatches(array, regex) {
  let matchArray = [];
  array.forEach((item, i) => {
    if(regex.test(item)){
      matchArray.push(item);
    }
  });
  return matchArray;
}



console.log(allMatches(words, /lab/)); // => ['laboratory', 'flab', 'elaborate']
