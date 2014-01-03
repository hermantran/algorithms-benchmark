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
  
  window.algorithms = algorithms;
})();