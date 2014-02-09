  algorithms.cocktailSort = function(array) {
    var len = array.length,
        swapped,
        i,
        j;
    
    for (i = 0; i < len; ++i) {
      swapped = false;
      
      // Move smallest value to beginning
      if (i % 2) {
        for (j = len - 1; j > 0; --j) {
          if (_compare(j-1, '>', j)) {
            _swap(j-1, j);
            swapped = true;
          }
        }
      // Most largest value to end
      } else {
        for (j = 0; j < len - 1; ++j) {
          if (_compare(j, '>', j+1)) {
            _swap(j, j+1);
            swapped = true;
          }
        }
      }
      
      if (!swapped) {
        break;
      }
    }
  };