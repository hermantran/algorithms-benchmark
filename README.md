  algorithms-benchmark
==================

[![Build Status](https://travis-ci.org/hermantran/algorithms-benchmark.png?branch=master)](https://travis-ci.org/hermantran/algorithms-benchmark)

algorithms-benchmark is a sorting algorithm library in JavaScript that was created for the purposes of benchmarking and evaluating the differences between different sorting algorithms. The library currently includes implementations of the following: bubble sort, cocktail sort, heap sort, insertion sort, quick sort, and selection sort. Unit tests are written with the Jasmine BDD framework.

## Setup
Include algorithms.min.js on your page. The library is exposed as `window.algorithms` or alternatively as a CommonJS or AMD module if detected. 

## Usage
The following methods are supported:
* `algorithms.bubbleSort(array)`
* `algorithms.cocktailSort(array)`
* `algorithms.heapSort(array)`
* `algorithms.insertionSort(array)`
* `algorithms.quickSort(array)`
* `algorithms.selectionSort(array)`

All sorting methods return an object containing the following properties:
* sort: The name of the sorting method.
* runtime: The runtime of the sorting method in milliseconds. In browsers, this uses `window.performance.now()` where supported. In Node.js, this uses `process.hrtime()`.
* comparisons: The number of times that two array elements were compared.
* swaps: The number of times that two array elements were swapped.

The additional helper object/functions are supported:
* `algorithms.stats`: Returns the object containing stats from the latest run of any sort
* `algorithms.afterComparison(array, first, second)`: Function called after every array element comparison. This can be directly set to a function that you want to run after every comparison. The function gets passed three arguments: the array (at its state after the comparison), the index of the first compared element, and the index of the second compared element. By default, this is an empty function.
* `algorithms.afterSwap(array, first, second)`: Function called after every array element swap. This can be directly set to a function that you want to run after every swap. The function gets passed three arguments: the array (at its state after the swap), the index of the first swapped element, and the index of the second swapped element. By default, this is an empty function.

Example:
```js
  var arr = [-922, 5, -21, 8177, -21, 7.7, 1.3, 0, -4, 67];
  algorithms.quickSort(arr); // Object {runtime: 0, comparisons: 38, swaps: 21, sort: "quickSort"}
  arr; // [-922, -21, -21, -4, 0, 1.3, 5, 7.7, 67, 8177]
  algorithms.stats; // Object {runtime: 0, comparisons: 38, swaps: 21, sort: "quickSort"}
  
  algorithms.afterSwap = function(array) { console.log(array) };
  arr = [6, 4, 3, 2, 5];
  algorithms.bubbleSort(arr);
  /* Console output
    [4, 6, 3, 2, 5]
    [4, 3, 6, 2, 5]
    [4, 3, 2, 6, 5] 
    [4, 3, 2, 5, 6] 
    [3, 4, 2, 5, 6] 
    [3, 2, 4, 5, 6] 
    [2, 3, 4, 5, 6] 
  */
```