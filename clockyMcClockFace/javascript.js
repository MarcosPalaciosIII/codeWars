var whatTimeIsIt = function(angle) {

  var totalMinutes = Math.floor(angle/.5);
  var hours = Math.floor(totalMinutes/60);
  var minutes = totalMinutes % 60;

  if(angle === 0) '12:00'
  if(angle < 30) hours = '12'
  if(String(hours).length < 2) hours = `0${hours}`
  if(String(minutes).length < 2) minutes = `0${minutes}`

  return `${hours}:${minutes}`
}


whatTimeIsIt(1)

// console.log('----- ', totalMinutes);
// console.log('===== ', hours);
// console.log('>>>>> ', minutes);

// hour hand moves .5 degrees each minute
// hour hand moves 30 degrees each hour


// clever solution


// var whatTimeIsIt = function(angle) {
// let hour = Math.floor(angle/30), minutes = Math.floor((angle%30)*2);
// if (hour < 10){hour = "0"+ hour;}
// if (hour <= 0){hour = 12;}
// if (minutes < 10){minutes = "0" + minutes;}
//   return hour + ":" + minutes;
// }
