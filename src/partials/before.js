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