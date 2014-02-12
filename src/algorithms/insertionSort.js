  algorithms.insertionSort = function insertionSort(array) {
    var len = array.length,
        pos,
        i,
        j;
    
    for (i = 1; i < len; ++i) {
      pos = -1;
      
      for (j = 0; j < i; ++j) {
        if (_compare(i, '<', j)) {
          pos = j;
          break;
        }
      }
      
      if (pos > -1) {
        for (j = i; j > pos; --j) {
          _swap(j, j-1);
        }
        _swap(pos, j);
      }
    }
  };