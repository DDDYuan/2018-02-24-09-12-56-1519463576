'use strict';

function amount_even(collection) {
  return collection.filter(num => num % 2 == 0).reduce((p, c) => p + c);
}

module.exports = amount_even;
