'use strict';

function compute_average(collection) {
  return collection.reduce((p, c) => p + c) / collection.length;
}

module.exports = compute_average;

