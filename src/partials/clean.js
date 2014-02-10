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
        enumerable: false
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