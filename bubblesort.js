function bubbleSort(array){
  var comparisons = 0;
  var swaps = 0;
  var numCompareCalled = 0;
  var wasSwapped = true;

  while (wasSwapped){
    compare();
  }

  function compare(){
    wasSwapped = false;
    for (var i = 0; i < array.length - numCompareCalled; i++){
      if (array[i] > array[i + 1]){
        var currentNum = array[i];
        array[i] = array [ i + 1];
        array[i + 1] = currentNum;
        swaps ++;
        wasSwapped = true;
      }
      comparisons ++;
    }
    numCompareCalled++;
  }
  return array;
}
