  algorithms.quickSort = function quickSort(array, left, right) {
    var len = array.length,
        middle,
        pivot;

    left = left || 0;
    right = right || len - 1;
    
    if (left < right) {
      middle = Math.round((left + right) / 2);
      pivot = _partition(left, right, middle);
      
      if (left === middle || right === middle) {
        return;  
      }
      
      quickSort(array, left, pivot - 1);
      quickSort(array, pivot + 1, right); 
    }
     
    function _partition(left, right, pivot) {
      var storeIndex = left,
          i;
      
      _swap(pivot, right);
      
      for (i = left; i < right; ++i) {
        // The right index now holds the pivot value, so this compares the pivot value
        if  (_compare(i, '<=', right)) {
          if (i !== storeIndex) {
            _swap(i, storeIndex);
          }
          storeIndex++;
        }
      }
      
      _swap(right, storeIndex);
      return storeIndex;
    }
  };