// The second argument/parameter is expected to be a function
function findWaldo(arr, found) {
  arr.forEach(function(names) {
    if (names === "Waldo") {
      var indexName = arr.indexOf(names);
      found(indexName);   // execute callback
    }
  });
}

function actionWhenFound(i) {
  console.log("Found Waldo at index " + i + "!");
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);