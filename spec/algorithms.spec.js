function addTest(sort, test) {
  it(test, function() {
    // Create a deep copy of the test case's array
    var array = JSON.parse(JSON.stringify(testCases[test].actual));
    
    sort(array);
    expect(array).toEqual(testCases[test].expected);
  });
}

function runTests(sort) {
  for (var test in testCases) {
    if (testCases.hasOwnProperty(test)) {
      addTest(sort, test);
    }
  }
}

function createSuite(algorithm) {
  describe(algorithm, function() {
    var sort = window.algorithms[algorithm];
    runTests(sort);
  });
}

for (var algorithm in window.algorithms) {
  if (window.algorithms.hasOwnProperty(algorithm) &&
     algorithm.indexOf('Sort') >= 0) {
    createSuite(algorithm);  
  }
}