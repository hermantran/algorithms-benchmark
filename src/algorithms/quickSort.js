  algorithms.quickSort = (function() {
    var prevPivot = [];
    
    function _quicksort(array, left, right) {
      var len = array.length,
          middle,
          pivot;
      
      if (left === undefined && right === undefined) {
        prevPivot.length = 0;
      }
      
      left = left || 0;
      right = right || len - 1;
      
      if (left < right) {
        middle = Math.round((left + right) / 2);
        pivot = _partition(array, left, right, middle);
        
        if (prevPivot.indexOf(pivot) < 0) {
          prevPivot.push(pivot);
          _quicksort(array, left, pivot - 1);
          _quicksort(array, pivot + 1, right); 
        }
      }
    }
    
    function _partition(array, left, right, pivot) {
      var storeIndex = left,
          i;
      
      _swap(pivot, right);
      
      for (i = left; i < right; i++) {
        // The right index now holds the pivot value, so this compares the pivot value
        if  (_compare(i, '<=', right)) {
          _swap(i, storeIndex);
          storeIndex++;
        }
      }
      
      _swap(right, storeIndex);
      return storeIndex;
    }
    
    return _quicksort;
  })();