  // Add these properties after each algorithm property is prepared
  algorithms.afterAccess = function() {};
  algorithms.afterComparison = function() {};
  algorithms.stats = _stats;
  
  // Add the internal helper functions for read-only
  if ('defineProperties' in Object) {
    Object.defineProperties(algorithms, {
      afterAccess: {
        enumerable: false
      },
      afterComparison: {
        enumerable: false
      },
      stats: {
        enumerable: false,
        configurable: false,
        writable: false
      },
      _swap: {
        enumerable: false,
        configurable: false,
        writable: false,
        value: _swap
      },
      _set: {
        enumerable: false,
        configurable: false,
        writable: false,
        value: _set
      },
      _compare: {
        enumerable: false,
        configurable: false,
        writable: false,
        value: _compare
      }
    });
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