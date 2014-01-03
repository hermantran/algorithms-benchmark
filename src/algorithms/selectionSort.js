  algorithms.selectionSort = function(array) {
    var len = array.length,
        min,
        i,
        j;
    
    for (i = 0; i < len - 1; i++) {
      min = i;
      for (j = i + 1; j < len; j++) {
        if (array[j] < array[min]) {
          min = j;
        }
      }
      
      _swap(array, i, min);
    }
  };