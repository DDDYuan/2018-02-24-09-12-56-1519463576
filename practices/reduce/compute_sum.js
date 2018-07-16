'use strict';

function calculate_elements_sum(collection) {
  return collection.reduce((p, c) => p + c);
}

module.exports = calculate_elements_sum;

