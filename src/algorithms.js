(function() {
  'use strict';
  var algorithms = {};
  
  // performance.now() polyfill https://gist.github.com/paulirish/5438650
  (function(){
    // prepare base perf object
    if (typeof window.performance === 'undefined') {
      window.performance = {};
    }
  
    if (!window.performance.now) {
      var nowOffset = Date.now();
    
      if (performance.timing && performance.timing.navigationStart) {
        nowOffset = performance.timing.navigationStart;
      }
    
      window.performance.now = function now() {
        return Date.now() - nowOffset;
      };
    }
  })();
  
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

  // Return performance numbers from each sorting algorithm
  for (var algorithm in algorithms) {
    if (algorithms.hasOwnProperty(algorithm)) {
        algorithms[algorithm] = createBenchmark(algorithm);
    }
  }

  function createBenchmark(algorithm) {
    var sort = algorithms[algorithm];
    
    return function(array) {
      var startTime = window.performance.now(),
          endTime;
      
      sort(array);
      endTime = window.performance.now();
      return endTime - startTime;
    };
  }

  // http://www.matteoagosti.com/blog/2013/02/24/writing-javascript-modules-for-both-browser-and-node/
  if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
    module.exports = algorithms;
  } else {
    if (typeof define === 'function' && define.amd) {
      define([], function() {
        return algorithms;
      });
    } else {
      window.algorithms = algorithms;
    }
  }
})();