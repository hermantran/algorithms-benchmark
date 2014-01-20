  algorithms.selectionSort = function(array) {
    var len = array.length,
        min,
        i,
        j;
    
    for (i = 0; i < len - 1; i++) {
      min = i;
      for (j = i + 1; j < len; j++) {
        if (_check(j, '<', min)) {
          min = j;
        }
      }
      
      _swap(i, min);
    }
  };