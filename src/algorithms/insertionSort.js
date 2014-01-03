  algorithms.insertionSort = function(array) {
    var len = array.length,
        temp,
        pos,
        i,
        j;
    
    for (i = 1; i < len; i++) {
      pos = -1;
      
      for (j = 0; j < i; j++) {
        if (array[i] < array[j]) {
          pos = j;
          temp = array[i];
          break;
        }
      }
      
      if (pos > -1) {
        for (j = i; j > pos; j--) {
          array[j] = array[j-1];
        }
        array[pos] = temp;
      }
    }
  };