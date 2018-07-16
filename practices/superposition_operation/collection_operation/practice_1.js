'use strict';

function hybrid_operation(collection) {
  return collection.map(num => num * 3 + 2).reduce((p, c) => p + c);
}

module.exports = hybrid_operation;

