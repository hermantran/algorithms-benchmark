  algorithms.mergeSort = function mergeSort(array) {
    var len = array.length,
        width,
        i;
    
    for (width = 1; width < len; width *= 2) {
      for (i = 0; i < len; i += (2 * width)) {
        _merge(i, _min(i + width, len), _min(i + (2*width), len));  
      }
    }
    
    function _min(first, second) {
      return first <= second ? first : second;
    }
    
    function _merge(left, right, end) {
      var rightIndex = right,
          swapIndex = right,
          j;
      
      while (left < right) {
        if (_compare(left, '>', right)) {
          _swap(left, right);

          // Sort the swapped element correctly within the right subarray
          for (j = right; j > rightIndex; --j) {
            if (_compare(j, '<', j - 1)) {
              _swap(j, j - 1);
            } else {
              swapIndex = j;
              break;
            }
          }
          
          for (j = swapIndex; j < end - 1; ++j) {
            if (_compare(j, '>', j + 1)) {
              _swap(j, j + 1);
            } else {
              break;
            }
          }
                 
          // If not done comparing all right subarray elements, go to next element
          right = j;
          if (right > end) {
            left++;  
            right = rightIndex;
          }
        } else {
          left++;  
          right = swapIndex;
        }
      }
    }
  };