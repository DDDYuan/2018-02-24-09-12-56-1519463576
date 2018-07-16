'use strict';

function choose_divisible_integer(collection_a, collection_b) {
  return collection_a.filter(ele => collection_b.filter(b => ele % b == 0).length > 0);
}

module.exports = choose_divisible_integer;
