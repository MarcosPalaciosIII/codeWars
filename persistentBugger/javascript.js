function persistence(num) {
  var counter = 0;
  var numArray = num.toString().split('');
  var tempTotal;

  while(numArray.length > 1) {
    console.log(tempTotal);
  tempTotal = numArray.reduce((a, b) => {
    return a * b;
  });
  counter++;
  numArray = tempTotal.toString().split('');
  }
  return counter;
}


persistence(659656759599);
