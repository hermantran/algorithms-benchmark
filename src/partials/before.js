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