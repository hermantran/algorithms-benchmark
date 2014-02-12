  // Add the internal helper functions for read-only
  if ('defineProperties' in Object) {
    Object.defineProperties(algorithms, {
      afterSwap: {
        enumerable: false,
        writable: true
      },
      afterComparison: {
        enumerable: false,
        writable: true
      },
      stats: {
        enumerable: false,
        writable: true
      },
      _swap: {
        enumerable: false,
        configurable: false,
        writable: false,
        value: _swap
      },
      _compare: {
        enumerable: false,
        configurable: false,
        writable: false,
        value: _compare
      }
    });
  }