(function() {
  'use strict';
  var algorithms = {},
      // Stats on latest sort - runtime in ms, array element comparisons, array element accesses
      _stats = {
        runtime: 0,
        comparisons: 0,
        accesses: 0
      },
      // Storing reference to array to be sorted, for use with internal helper functions
      _array;
  
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
  
  // Swaps the values at two given array indexes - two array element accesses
  function _swap(first, second) {
    var temp = _array[first];
    _array[first] = _array[second];
    _array[second] = temp;
    _stats.accesses += 2;
  }
  
  // Sets the value of at an array index - one array element access
  function _set(index, value) {
    _array[index] = value;
    _stats.accesses++;
  }
  
  // Compares the value at two given array indexes
  function _check(first, operator, second) {
    var bool;
    
    if (operator === '>') {
      bool = _array[first] > _array[second];    
    }
    else if (operator === '<') {
      bool = _array[first] < _array[second];    
    } else {
      throw new Error('Unknown operator used.');  
    }
    
    _stats.comparisons++;
    return bool;
  }

  algorithms.bubbleSort = function(array) {
    var len = array.length,
        swapped,
        i,
        j;
    
    for (i = 0; i < len; i++) {
      swapped = false;
      
      for (j = 0; j < len - 1; j++) {
        if (_check(j, '>', j+1)) {
          _swap(j, j+1);
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

  algorithms.insertionSort = function(array) {
    var len = array.length,
        temp,
        pos,
        i,
        j;
    
    for (i = 1; i < len; i++) {
      pos = -1;
      
      for (j = 0; j < i; j++) {
        if (_check(i, '<', j)) {
          pos = j;
          temp = array[i];
          break;
        }
      }
      
      if (pos > -1) {
        for (j = i; j > pos; j--) {
          _set(j, array[j-1]);
        }
        _set(pos, temp);
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
        if (_check(j, '<', min)) {
          min = j;
        }
      }
      
      _swap(i, min);
    }
  };

  // Hook up benchmarking to each sorting algorithm
  for (var algorithm in algorithms) {
    if (algorithms.hasOwnProperty(algorithm)) {
        algorithms[algorithm] = _prepareBenchmarking(algorithm);
    }
  }

  // Return performance numbers from each sorting algorithm
  function _prepareBenchmarking(algorithm) {
    var sort = algorithms[algorithm];
    
    return function(array) {
      var startTime = window.performance.now(),
          endTime;
      
      _stats.runtime = 0;
      _stats.comparisons = 0;
      _stats.accesses = 0;
      _array = array;
      
      sort(_array);
      
      endTime = window.performance.now();
      _stats.runtime = endTime - startTime; 
      return _stats;
    };
  }

  algorithms.stats = _stats;

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