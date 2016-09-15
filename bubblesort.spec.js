describe('Bubble Sort', function(){
  it('handles an empty array', function(){
    expect( bubbleSort([])).toEqual([]);
  });
  it('handles an array with a single item', function(){
    var arrayOfOne = [1];
    expect( bubbleSort(arrayOfOne)[0]).toEqual(1);
    expect( bubbleSort(arrayOfOne).length).toEqual(1);
  });
  it('handles an array with multiple items', function(){
    var arrayMultipleItems = [1, 3, 2, 8, 4, 7];
    expect( bubbleSort(arrayMultipleItems)).toEqual([1, 2, 3, 4, 7, 8]);
  });
});
