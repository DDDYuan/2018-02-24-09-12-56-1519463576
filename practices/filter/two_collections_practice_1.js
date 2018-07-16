'use strict';

function choose_common_elements(collection_a, collection_b) {
  return collection_a.filter(ele => collection_b.indexOf(ele) >= 0);
}

module.exports = choose_common_elements;
