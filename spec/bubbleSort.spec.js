describe('Bubble sort', function() {
  var sort = window.algorithms.bubbleSort;
  
  for (var test in testCases) {
    if (testCases.hasOwnProperty(test)) {
      addTest(sort, test);
    }
  }
});