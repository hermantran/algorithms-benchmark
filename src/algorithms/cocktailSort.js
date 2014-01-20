  algorithms.cocktailSort = function(array) {
    var len = array.length,
        swapped,
        i,
        j;
    
    for (i = 0; i < len; i++) {
      swapped = false;
      
      // Most largest value to end
      if (i % 2) {
        for (j = 0; j < len - 1; j++) {
          if (_check(j, '>', j+1)) {
            _swap(j, j+1);
            swapped = true;
          }
        }
      // Move smallest value to beginning
      } else {
        for (j = len - 1; j > 0; j--) {
          if (_check(j-1, '>', j)) {
            _swap(j-1, j);
            swapped = true;
          }
        }
      }
      
      if (!swapped) {
        break;
      }
    }
  };