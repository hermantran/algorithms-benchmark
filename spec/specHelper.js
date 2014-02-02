var random = randomArray();
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
  },
  'random': {
    actual: random.unsorted,
    expected: random.sorted
  }
};

function randomArray() {
  var random = [];
  for (var i = 0; i < 50; i++) {
      var el = Math.round(Math.random() * 50);
      random.push(el);
  }
  
  return {
    unsorted: random,
    sorted: JSON.parse(JSON.stringify(random)).sort(inOrder)
  };
}

function inOrder(first, second) {
  return first - second;
}

beforeEach(function() {
  
});