function barCodeScanner(serial) {
  switch (serial) {
    case '123':
      console.log('Product1');
    case '113':
      console.log('Product2');
    case '142':
      console.log('Product3');
    default:
      console.log('Product not found!');
  }
}

barCodeScanner('113');

//should log 'Product2' to the console

/* nope! logged all of the phrases except the first because there were no breaks
and the system fell through all of the switch statements starting at '113'*/
