(function() {
  'use strict';
  var algorithms = {};
  
  function _swap(array, first, second) {
    var temp = array[first];
    array[first] = array[second];
    array[second] = temp;
  }

  algorithms.bubbleSort = function(array) {
    var len = array.length,
        swapped,
        i,
        j;
    
    for (i = 0; i < len; i++) {
      swapped = false;
      
      for (j = 0; j < len - 1; j++) {
        if (array[j] > array[j+1]) {
            _swap(array, j, j+1);
            swapped = true;
        }
      }
      
      if (!swapped) {
        break;
      }
    }
  };

  algorithms.cocktailSort = function(array) {
    var len = array.length,
        swapped,
        i,
        j;
    
    for (i = 0; i < len; i++) {
      swapped = false;
      
      // Sort to smallest
      if (i % 1) {
        for (j = len - 1; j > 0; j--) {
          if (array[j-1] < array[j]) {
            _swap(array, j-1, j);
            swapped = true;
          }
        }
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

  window.algorithms = algorithms;
})();