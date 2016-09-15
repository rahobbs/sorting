describe('Split Array function', function() {
  it('is able to split an array into two halves', function() {
    var array = [3, 5, 8, 7, 9];
    var result = [[3, 5], [8, 7, 9]];
    expect(split(array)).toEqual(result);


  });
});

describe('Merge Sort', function(){
  it('is able to merge two sorted arrays into one sorted array', function(){
    var firstArray = [1, 3, 5];
    var secondArray = [2, 4, 6];
    var result = [1, 2, 3, 4, 5, 6];
    expect(merge(firstArray, secondArray)).toEqual(result);
  });
});

describe('mergeSort', function(){
  it('is able to sort an unsorted array', function(){
    var array = [5, 2, 6, 2, 7];
    var sorted = [2, 2, 5, 6, 7];
    expect(mergeSort(array)).toEqual(sorted);
  });
});
