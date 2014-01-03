(function() {
  'use strict';
  var algorithms = {};
  
  function _swap(array, first, second) {
    var temp = array[first];
    array[first] = array[second];
    array[second] = temp;
  }