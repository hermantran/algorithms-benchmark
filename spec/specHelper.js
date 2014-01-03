var testCases = {
  'empty array': {
    actual: [],
    expected: []
  },
  'single element': {
    actual: [0],
    expected: [0]
  },
  'repeated elements': {
    actual: [1, 1, 1],
    expected: [1, 1, 1]
  },
  'ordered array': {
    actual: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    expected: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  },
  'reversed array': {
    actual: [10, 9, 8, 7, 6, 5, 4, 3, 2, 1],
    expected: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  },
  'varied': {
    actual: [-922, 5, -21, 8177, -21, 7.7, 1.3, 0, -4, 67],
    expected: [-922, -21, -21, -4, 0, 1.3, 5, 7.7, 67, 8177]
  }
};
  
function addTest(sort, test) {
  it(test, function() {
    // Create a deep copy of the test case's array
    var array = JSON.parse(JSON.stringify(testCases[test].actual));
    
    sort(array);
    expect(array).toEqual(testCases[test].expected);
  });
}

beforeEach(function() {
  
});