'use strict';

function average_to_letter(collection) {
  return String.fromCharCode(96 + Math.ceil(collection.reduce((p, c) => p + c) / collection.length));
}

module.exports = average_to_letter;

