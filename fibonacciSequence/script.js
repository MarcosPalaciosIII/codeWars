function productFib(prod){
 var tempArray = [0, 1];
 var resultArray = [];
 for (let i = 2; i < prod + 1; i++){
 var arrLength = tempArray.length
   if((tempArray[i - 2] * tempArray[i - 1]) === prod) {
     resultArray.push(tempArray[i - 2]);
     resultArray.push(tempArray[i - 1]);
     resultArray.push(true);
     return resultArray
     break;
   } else if((tempArray[i - 2] * tempArray[i - 1]) > prod) {
     resultArray.push(tempArray[i - 2]);
     resultArray.push(tempArray[i - 1]);
     resultArray.push(false);
     return resultArray
     break;
   } else {
    tempArray.push(tempArray[i - 2] + tempArray[i - 1])
   }
  }
  return tempArray
}

// ============================= clever answers ========================

// function productFib(prod){
//   let [a, b] = [0, 1];
//   while(a * b < prod) [a, b] = [b, a + b];
//   return [a, b, a * b === prod];
// }


// function productFib(prod){
//   var a = 1
//   var b = 1;
//   while (a*b < prod) {
//     var next = a+b;
//     a = b;
//     b = next;
//   }
//   return [a, b, a*b===prod];
// }

// =====================================================================
