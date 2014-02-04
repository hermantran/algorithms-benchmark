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
      var startTime = _now(),
          endTime;
      
      _stats.runtime = 0;
      _stats.comparisons = 0;
      _stats.accesses = 0;
      _array = array;
      
      sort(_array);
      
      _array = [];
      endTime = _now();
      _stats.runtime = endTime - startTime; 
      return _stats;
    };
  }

  // Add these properties after each algorithm property is prepared
  algorithms.afterAccess = function() {};
  algorithms.afterComparison = function() {};
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