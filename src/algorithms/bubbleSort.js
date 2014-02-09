  algorithms.bubbleSort = function bubbleSort(array) {
    var len = array.length,
        swapped,
        i,
        j;
    
    for (i = 0; i < len; ++i) {
      swapped = false;
      
      for (j = 0; j < len - 1; ++j) {
        if (_compare(j, '>', j+1)) {
          _swap(j, j+1);
          swapped = true;
        }
      }
      
      if (!swapped) {
        break;
      }
    }
  };