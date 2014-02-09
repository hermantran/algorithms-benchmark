  algorithms.insertionSort = function(array) {
    var len = array.length,
        temp,
        pos,
        i,
        j;
    
    for (i = 1; i < len; ++i) {
      pos = -1;
      
      for (j = 0; j < i; ++j) {
        if (_compare(i, '<', j)) {
          pos = j;
          temp = array[i];
          break;
        }
      }
      
      if (pos > -1) {
        for (j = i; j > pos; --j) {
          _set(j, array[j-1]);
        }
        _set(pos, temp);
      }
    }
  };