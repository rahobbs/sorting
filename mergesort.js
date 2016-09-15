function split(wholeArray) {
  var numToSplit = Math.floor(wholeArray.length / 2);
  var firstHalf = wholeArray.slice(0, numToSplit);
  var secondHalf = wholeArray.slice(numToSplit);
  return [firstHalf, secondHalf];
}

function merge(arr1, arr2){
  var resultArray = [];
  var arr1Cursor = 0;
  var arr2Cursor = 0;

  while (arr1Cursor < arr1.length && arr2Cursor < arr2.length){
    if (arr1[arr1Cursor] < arr2[arr2Cursor]){
      resultArray.push(arr1[arr1Cursor]);
      arr1Cursor++;
    } else {
      resultArray.push(arr2[arr2Cursor]);
      arr2Cursor++;
    }
  }

  if (arr1Cursor === arr1.length){
    return resultArray.concat(arr2.splice(arr2Cursor));
  } else if (arr2Cursor === arr2.length) {
    return resultArray.concat(arr1.splice(arr1Cursor));
  }
}

function mergeSort(array){

  // split the the array down to arrays of lenth 1
  // call merge until everything is merged

  return resultArray;
}
