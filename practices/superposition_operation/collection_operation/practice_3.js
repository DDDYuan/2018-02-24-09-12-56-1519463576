'use strict';

function hybrid_operation_to_uneven(collection) {
  return collection.filter(num => num % 2 == 1).map(num => num * 3 + 5).reduce((p, c) => p + c);
}

module.exports = hybrid_operation_to_uneven;

