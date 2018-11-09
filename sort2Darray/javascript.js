function namesSorter (departmentsArray) {
  var arr = []
  for(let i = 0; i < departmentsArray.length; i++) {
    for(let j = 0; j < departmentsArray[i].length; j++) {
      arr.push(departmentsArray[i][j])
    }
  }
  arr.sort((a,b) => {
    return a.length - b.length || a.localeCompare(b)
  })
  console.log(arr);
  return arr;
}

namesSorter(randomArray)




// clever solution .

// const namesSorter = a => a.join`,`.split`,`.sort((x, y) => x.length - y.length || x.localeCompare(y));
