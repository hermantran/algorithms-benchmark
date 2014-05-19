  algorithms.heapSort = function heapSort(array) {
    var len = array.length,
        heapSize = len,
        i;
    
    if (len <= 1) {
      return;  
    }
    
    for (i = 1; i < len; ++i) {
      _heapify(i);
    }
    
    for (i = 0; i < len - 1; ++i) {
      heapSize--;
      _swap(0, heapSize);
      _reorder(0, heapSize);
    }
    
    function _heapify(index) {
      var parent = Math.floor((index - 1) / 2);
      
      if (_compare(index, '>', parent)) {
        _swap(index, parent);
        _heapify(parent);
      }
    }
    
    function _reorder(index, size) {
      var leftChild = (2 * index) + 1,
          rightChild = leftChild + 1,
          swapIndex = index;
      
      if (index >= size) {
        return;  
      }
      
      if (leftChild < size && _compare(leftChild, '>', swapIndex)) {
        swapIndex = leftChild;
      }
      
      if (rightChild < size && _compare(rightChild, '>', swapIndex)) {
        swapIndex = rightChild;  
      }
      
      if (swapIndex > index) {
        _swap(index, swapIndex);
        _reorder(swapIndex, size);
      }
    }
  };