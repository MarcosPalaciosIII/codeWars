function findMissingLetter(arr) {
  var str = "abcdefghijklmnopqrstuvwxyz";
  var str2arr = arr.join("");
  for (var i = 0; i < str2arr.length; i++) {
    if (str2arr.charCodeAt(i + 1) - str2arr.charCodeAt(i) != 1) {
      if(arr[0] === arr[0].toUpperCase()) {
        return String.fromCharCode(str2arr.charCodeAt(i) + 1).toUpperCase();
      } else {
        return String.fromCharCode(str2arr.charCodeAt(i) + 1);
      }
    }
  }
}

  
findMissingLetter(["a","b","c","d","f"]);
findMissingLetter(['O','Q','R','S']);
