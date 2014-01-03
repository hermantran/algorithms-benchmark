  algorithms.cocktailSort = function(array) {
    var len = array.length,
        swapped,
        i,
        j;
    
    for (i = 0; i < len; i++) {
      swapped = false;
      
      // Sort smallest to beginning
      if (i % 1) {
        for (j = len - 1; j > 0; j--) {
          if (array[j-1] > array[j]) {
            _swap(array, j-1, j);
            swapped = true;
          }
        }
      // Sort largest to end
      } else {
        for (j = 0; j < len - 1; j++) {
          if (array[j] > array[j+1]) {
              _swap(array, j, j+1);
              swapped = true;
          }
        }
      }
      
      if (!swapped) {
        break;
      }
    }
  };