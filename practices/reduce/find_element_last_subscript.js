'use strict';

function calculate_elements_sum(collection, element) {
  return collection.length - 1 - collection.reverse().findIndex(e => e === element);
}

module.exports = calculate_elements_sum;
