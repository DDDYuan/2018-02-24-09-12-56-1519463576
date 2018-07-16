'use strict';

function average_uneven(collection) {
  var odd = collection.filter(num => num % 2 == 1);
  return odd.reduce((p, c) => p + c) / odd.length;
}

module.exports = average_uneven;
