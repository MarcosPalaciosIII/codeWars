function alphabetPosition(text) {
  var tempArr = []
    for(var i = 0; i < text.length; i++) {
      console.log(`position ${i}: ${text.toUpperCase().charCodeAt(i) - 64}`)
      if((text.toUpperCase().charCodeAt(i) - 64) < 1 || (text.toUpperCase().charCodeAt(i) - 64) > 26) {
        continue;
      } else {
        tempArr.push(text.toUpperCase().charCodeAt(i) - 64);
      }
    }
  text = tempArr.join(' ')

  return text;
}
