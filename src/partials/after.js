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