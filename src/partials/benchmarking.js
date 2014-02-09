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